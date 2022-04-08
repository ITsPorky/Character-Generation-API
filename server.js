// Node Module Imports
require("dotenv").config();
const Web3 = require("web3");
// const https = require("https");
const express = require("express");
// const fs = require("fs");
const path = require("path");
const { registerFont } = require("canvas");
registerFont(__dirname + "/assets/Press_Start_2P/PressStart2P-Regular.ttf", {
  family: "Press Start 2P",
});

// SSL Enable
// const options = {
//   key: fs.readFileSync("./security/RPG-Character-Generator-API"),
//   cert: fs.readFileSync(KEY_PATH),
// };

// Code File Imports
const generator = require("./src/generate");
const metadata = require("./src/metadata");
const draw = require("./src/draw");
const abi = require("./src/abi");
const characters = require("./src/characters.json");

// API Server Info
const app = express();
const port = process.env.PORT || 3030;

// Initialise web3
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://${process.env.INFURA_NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}`
  )
);

// Contract
const DGC = new web3.eth.Contract(abi, process.env.DGC_ADDRESS);

// Get DGC
const getDGC = (id, cb) => {
  DGC.methods
    .getDGC(id)
    .call()
    .then((info) => {
      if (cb) {
        cb({
          owner: info.tokenOwner,
          seed: info.seed.slice(-64),
          name:
            info.tokenName.length > 0
              ? `#${id} ` + info.tokenName
              : `DGC #${id}`,
        });
      }
    })
    .catch(() => {
      if (cb) {
        cb({
          error: true,
        });
      }
    });
};

// CORs Headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Link CSS and script files
app.use("/", express.static(__dirname + "/assets/"));

// Home URL
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Get Character by ID
app.get(`/:id([0-9]+)/:scale([0-9]+)x.png`, async (req, res) => {
  const id = parseInt(req.params.id);
  const scale = parseInt(req.params.scale);
  if (scale > 0 && scale <= 5) {
    getDGC(id, async (info) => {
      if (info.error) {
        res.status(404).json("Not Found");
      } else {
        res.type("png");
        const stream = await draw.drawCharacterStream(
          scale,
          await generator.generateRandom(info.seed)
        );
        stream.pipe(res);
      }
    });
  } else {
    res.status(404).json("Not Found");
  }
});

// Get Token Metadata by ID (OpenSea Metadata)
app.get(`/:id([0-9]+)/metadataOS`, (req, res) => {
  const id = parseInt(req.params.id);
  getDGC(id, async (info) => {
    if (info.error) {
      res.status(404).json("Not Found");
    } else {
      res.header("Content-Type", "application/json");
      res.send(
        metadata.getMetadataOS(id, await generator.generateRandom(info.seed))
      );
    }
  });
});

// Get Token Metadata by ID
app.get(`/:id([0-9]+)/metadata`, (req, res) => {
  const id = parseInt(req.params.id);
  getDGC(id, async (info) => {
    if (info.error) {
      res.status(404).json("Not Found");
    } else {
      res.header("Content-Type", "application/json");
      res.send(
        metadata.getMetadata(id, await generator.generateRandom(info.seed))
      );
    }
  });
});

// Get Contract Metadata
app.get(`/metadata`, (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(metadata.getContractMetadata());
});

// Draw Preset Character
app.get(`/special/:id([0-9]+)/:scale([0-9]+)x.png`, async (req, res) => {
  const id = req.params.id;
  const scale = req.params.scale;
  const character = characters[id];
  if (scale > 0 && scale <= 5) {
    res.type("png");
    const stream = await draw.drawCharacterStream(scale, character);
    stream.pipe(res);
  } else {
    res.status(404).json("Not Found");
  }
});

// Get Special Character Metadata
app.get(`/special/:id([0-9]+)/metadata`, async (req, res) => {
  const seed = req.params.id;
  res.header("Content-Type", "application/json");
  res.send(metadata.getMetadata(0, await generator.generateCharacter(seed)));
});

// Draw Character Based on Seed
app.get(`/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`, async (req, res) => {
  const seed = req.params.seed;
  const scale = req.params.scale;
  if (scale > 0 && scale <= 5) {
    res.type("png");
    const stream = await draw.drawCharacterStream(
      scale,
      await generator.generateRandom(seed)
    );
    stream.pipe(res);
  } else {
    res.status(404).json("Not Found");
  }
});

// Get Character Based on Seed (OpenSea Metadata)
app.get(`/seed/:seed([a-fA-F0-9]+)/metadataOS`, async (req, res) => {
  const seed = req.params.seed;
  res.header("Content-Type", "application/json");
  res.send(metadata.getMetadataOS(0, await generator.generateRandom(seed)));
});

// Get Character Metadata Based on Seed
app.get(`/seed/:seed([a-fA-F0-9]+)/metadata`, async (req, res) => {
  const seed = req.params.seed;
  res.header("Content-Type", "application/json");
  res.send(metadata.getMetadata(0, await generator.generateRandom(seed)));
});

// Draw Sprite only of character
app.get(`/sprite/:id([0-9]+)/:scale([0-9]+)x.png`, async (req, res) => {
  const id = parseInt(req.params.id);
  const scale = parseInt(req.params.scale);
  if (scale > 0 && scale <= 25) {
    getDGC(id, async (info) => {
      if (info.error) {
        res.status(404).json("Not Found");
      } else {
        res.type("png");
        const stream = await draw.drawSpriteStream(
          scale,
          await generator.generateRandom(info.seed)
        );
        stream.pipe(res);
      }
    });
  } else {
    res.status(404).json("Not Found");
  }
});

// Draw Character Sprite Based on Seed
app.get(
  `/sprite/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`,
  async (req, res) => {
    const seed = req.params.seed;
    const scale = req.params.scale;
    if (scale > 0 && scale <= 25) {
      res.type("png");
      const stream = await draw.drawSpriteStream(
        scale,
        await generator.generateRandom(seed)
      );
      stream.pipe(res);
    } else {
      res.status(404).json("Not Found");
    }
  }
);

// Draw Sprite only of Weapon
app.get(`/weapon/:id([0-9]+)/:scale([0-9]+)x.png`, async (req, res) => {
  const id = parseInt(req.params.id);
  const scale = parseInt(req.params.scale);
  if (scale > 0 && scale <= 25) {
    getDGC(id, async (info) => {
      if (info.error) {
        res.status(404).json("Not Found");
      } else {
        res.type("png");
        const stream = await draw.drawWeaponStream(
          scale,
          await generator.generateRandom(info.seed)
        );
        stream.pipe(res);
      }
    });
  } else {
    res.status(404).json("Not Found");
  }
});

// Draw Weapon Sprite Based on Seed
app.get(
  `/weapon/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`,
  async (req, res) => {
    const seed = req.params.seed;
    const scale = req.params.scale;
    if (scale > 0 && scale <= 25) {
      res.type("png");
      const stream = await draw.drawWeaponStream(
        scale,
        await generator.generateRandom(seed)
      );
      stream.pipe(res);
    } else {
      res.status(404).json("Not Found");
    }
  }
);

// Server Listen
app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
