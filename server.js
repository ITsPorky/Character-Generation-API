// Node Module Imports
require("dotenv").config();
const express = require("express");
const path = require("path");
const { registerFont } = require("canvas");
registerFont(__dirname + "/assets/Press_Start_2P/PressStart2P-Regular.ttf", {
  family: "Press Start 2P",
  Style: "Regular",
});

// Code File Imports
const generator = require("./src/v1/generate");
const metadata = require("./src/metadata");
const draw = require("./src/v1/draw");
const characters = require("./src/v1/characters.json");

// API Server Info
const app = express();
const port = process.env.PORT || 3030;

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
  res.sendFile(path.join(__dirname, "/README.html"));
});

// *********************************** //
// Version 1 Routes
// *********************************** //

// Get Character by ID
app.get(`/v1/:id([0-9]+)/:scale([0-9]+)x.png`, async (req, res) => {
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

// Draw Preset Character Card
app.get(`/v1/special/:id([0-9]+)/:scale([0-9]+)x.png`, async (req, res) => {
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
app.get(`/v1/special/:id([0-9]+)/metadata`, async (req, res) => {
  const seed = req.params.id;
  res.header("Content-Type", "application/json");
  res.send(metadata.getMetadata(0, await generator.generateCharacter(seed)));
});

// Draw Character Card Based on Seed
app.get(
  `/v1/seed/:seed([a-zA-Z0-9]+)/:scale([0-9]+)x.png`,
  async (req, res) => {
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
  }
);

// Get Character Metadata Based on Seed
app.get(`/v1/seed/:seed([a-fA-F0-9]+)/metadata`, async (req, res) => {
  const seed = req.params.seed;
  res.header("Content-Type", "application/json");
  res.send(metadata.getMetadata(0, await generator.generateRandom(seed)));
});

// Draw Sprite only of character
app.get(
  `/v1/special/sprite/:id([0-9]+)/:scale([0-9]+)x.png`,
  async (req, res) => {
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
  }
);

// Draw Character Sprite Based on Seed
app.get(
  `/v1/sprite/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`,
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
app.get(
  `/v1/special/weapon/:id([0-9]+)/:scale([0-9]+)x.png`,
  async (req, res) => {
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
  }
);

// Draw Weapon Sprite Based on Seed
app.get(
  `/v1/weapon/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`,
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

// *********************************** //
// Version 2 Routes
// *********************************** //

// Draw Character Card Based on Seed
app.get(
  `/v2/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`,
  async (req, res) => {
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
  }
);

// Get Character Metadata Based on Seed
app.get(`/v1/seed/:seed([a-fA-F0-9]+)/metadata`, async (req, res) => {
  const seed = req.params.seed;
  res.header("Content-Type", "application/json");
  res.send(metadata.getMetadata(0, await generator.generateRandom(seed)));
});

// Draw Character Sprite Based on Seed
app.get(
  `/v2/sprite/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`,
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

// Draw Weapon Sprite Based on Seed
app.get(
  `/v2/weapon/seed/:seed([a-fA-F0-9]+)/:scale([0-9]+)x.png`,
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
