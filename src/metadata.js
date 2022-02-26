const getContractMetadata = () => {
  return {
    name: "Dungeon Cards",
    description:
      "A unique set of 1,000 collectable and tradable Fantasy themed Character Card NFTs.",
    image_url: "http://dungeoncards.us-east-2.elasticbeanstalk.com/logo.png",
    external_link:
      "http://dungeoncards.us-east-2.elasticbeanstalk.com/logo.png",
    seller_fee_basis_points: 250,
    fee_recipient: "",
  };
};

const getMetadataOS = (id, character) => {
  const metadata = {
    description: character.description,
    external_url: `http://dungeoncards.us-east-2.elasticbeanstalk.com/${id}/1x.png`,
    image_url: character.image_url, // `http://dungeoncards.us-east-2.elasticbeanstalk.com/${id}/1x.png`
    name: character.name + " #" + id,
    attributes: [
      {
        trait_type: "Body",
        value: character.body.name,
      },
      {
        trait_type: "Eyes",
        value: character.eyes.name,
      },
      {
        trait_type: "Head",
        value: character.hair.name + " (Armor: " + character.hair.armor + ")",
      },
      {
        trait_type: "Facial Hair",
        value: character.facialHair.name,
      },
      {
        trait_type: "Chest",
        value: character.chest.name + " (Armor: " + character.chest.armor + ")",
      },
      {
        trait_type: "Legs",
        value: character.legs.name + " (Armor: " + character.legs.armor + ")",
      },
      {
        trait_type: "Weapon",
        value: character.weapon.type,
      },
      {
        trait_type: "Weapon Elemental",
        value: character.weapon.elemental,
      },
      {
        display_type: "number",
        trait_type: "Health Points",
        value: character.hp,
      },
      {
        display_type: "number",
        trait_type: "Armor Class",
        value: character.ac,
      },
      {
        display_type: "number",
        trait_type: "Strength",
        value: character.str,
        max_value: 20,
      },
      {
        display_type: "number",
        trait_type: "Dexterity",
        value: character.dex,
        max_value: 20,
      },
      {
        display_type: "number",
        trait_type: "Constitution",
        value: character.con,
        max_value: 20,
      },
      {
        display_type: "number",
        trait_type: "Intelligence",
        value: character.int,
        max_value: 20,
      },
      {
        display_type: "number",
        trait_type: "Wisdom",
        value: character.wis,
        max_value: 20,
      },
      {
        display_type: "number",
        trait_type: "Charisma",
        value: character.cha,
        max_value: 20,
      },
      {
        display_type: "boost_number",
        trait_type: "Stat Modifier: " + character.statModifier,
        value: character.statModifierValue,
      },
      {
        display_type: "boost_number",
        trait_type: "Weapon Modifier: ",
        value: character.weapon.modifier,
      },
      {
        display_type: "boost_number",
        trait_type: "Weapon Damage: ",
        value: character.weapon.damage,
      },
      {
        trait_type: "Zechrium",
        value: character.coins,
      },
      {
        trait_type: "Sex",
        value: character.sex,
      },
      {
        trait_type: "Race",
        value: character.race,
      },
      {
        trait_type: "Class",
        value: character.class,
      },
      {
        trait_type: "Height",
        value: character.height,
      },
      {
        trait_type: "Background",
        value: character.background.background,
      },
    ],
  };

  return metadata;
};

const getMetadata = (id, character) => {
  const metadata = {
    body: character.body,
    eyes: character.eyes,
    hair: character.hair,
    chest: character.chest,
    legs: character.legs,
    facialHair: character.facialHair,
    weapon: character.weapon,
    hp: character.hp,
    ac: character.ac,
    str: character.str,
    dex: character.dex,
    con: character.con,
    int: character.int,
    wis: character.wis,
    cha: character.cha,
    statModifier: character.statModifier,
    statModifierValue: character.statModifierValue,
    coins: character.coins,
    name: character.name,
    sex: character.sex,
    race: character.race,
    class: character.class,
    height: character.height,
    background: character.background,
    description: character.description,
    image_url: character.image_url,
    sprite_url: character.sprite_url,
    weapon_url: character.weapon_url,
    seed: character.seed,
  };

  return metadata;
};

// Exports
module.exports = {
  getContractMetadata,
  getMetadata,
  getMetadataOS,
};
