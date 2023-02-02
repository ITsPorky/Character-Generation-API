# API Documentation

## Quick links to Test

In order to change the seed for the characters, change the 0 in the URL address this is the seed value that is used in the API.

- [Pre-generated Characters Card](https://character-gen-api.onrender.com/special/0/1x.png)
- [Pre-generated Characters Metadata](https://character-gen-api.onrender.com/special/0/metadata)

- [Seeded Characters Card](https://character-gen-api.onrender.com/seed/0/1x.png)
- [Seeded Characters Metadata](https://character-gen-api.onrender.com/seed/0/metadata)

- [Seeded Characters Sprite](https://character-gen-api.onrender.com/sprite/seed/0/10x.png)

- [Seeded Characters Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)    

# Response Types

This API has multiple responses a user can request, these include:

----

## Character Card (format: `.png`)

This response type can be retrieved by using the URL `/seed/0/1x.png`.

- The URL is made up of information. `/seed` tells the API to generate the character for a given seed value.
- The next part of the URL `/0` is the seed to be used, this is a hexadecimal value (0-9 and a-f) which will be the seed used to generate the character. When given the same seed the API will generate the same character with all the same information.
- The final part of the URL determines the size of the image to be returned. `/1x.png` will return the default size of the Character Card, `/2x.png` will return a Character Card twice the size of the defualt image, and so on (Size limit is `5x.png` as the image is too large and causes too much stress on the API server).

Example response:     
![Seeded Characters Card](https://character-gen-api.onrender.com/seed/0/1x.png)    

----

## Character Sprite (format: `.png`)

This response type can be retrieved by using the URL `/sprite/seed/0/1x.png`.

- The URL is made up of information. `/sprite` tells the API to generate the character sprite only for a given seed value.
- The `/seed` part tells the API to generate the character form a given seed value.
- The next part of the URL `/0` is the seed to be used, this is a hexadecimal value (0-9 and a-f) which will be the seed used to generate the character. When given the same seed the API will generate the same character with all the same information.
- The final part of the URL determines the size of the image to be returned. `/1x.png` will return the default size of the Character Sprite, `/2x.png` will return a Character Sprite twice the size of the defualt image, and so on (Size limit is `10x.png`).

Example response:     
![Seeded Character Sprite](https://character-gen-api.onrender.com/sprite/seed/0/10x.png)    

----

## Weapon Sprite (format: `.png`)

This response type can be retrieved by using the URL `/weapon/seed/0/1x.png`.

- The URL is made up of information. `/weapon` tells the API to generate the character sprite only for a given seed value.
- The `/seed` part tells the API to generate the character form a given seed value.
- The next part of the URL `/0` is the seed to be used, this is a hexadecimal value (0-9 and a-f) which will be the seed used to generate the weapon. When given the same seed the API will generate the same weapon with all the same information.
- The final part of the URL determines the size of the image to be returned. `/1x.png` will return the default size of the Weapon Sprite, `/2x.png` will return a Weapon Sprite twice the size of the defualt image, and so on (Size limit is `10x.png`).

Example response:    
![Seeded Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)    

----

## Character Metadata (format: `JSON`)

This response type can be retrieved by using the URL `/seed/0/metadata`.

- The URL is made up of information. `/seed` tells the API to generate the character for a given seed value.
- The next part of the URL `/0` is the seed to be used, this is a hexadecimal value (0-9 and a-f) which will be the seed used to generate the character. When given the same seed the API will generate the same character with all the same information.
- The final part of the URL tells the API to return the metadata for the Character. This includes all the information that is generated for the character, including the character card URL, character sprite URL, weapon sprite URL, and extra information that is not displayed in the character card.

Example response:    
```{"body":{"src":"./assets/body/body28.png","name":"Large Pointed Ear","race":"Orc"},"eyes":{"src":"./assets/eyes/eye6.png","name":"Purple","chance":100},"hair":{"src":"./assets/hair/hair64.png","name":"Long Ponytail","armor":0,"chance":100},"chest":{"src":"./assets/shirts/shirt16.png","armor":2,"name":"Leather Armor","chance":100},"legs":{"src":"./assets/legs/legs14.png","armor":1,"name":"Grey Pants","chance":100},"facialHair":{"src":"./assets/facial-hair/facial-hair1.png","name":"none","chance":100},"weapon":{"src":"./assets/weapons/staffs/staff42.png","type":"Staff","elemental":"Earth","damage":"d6","modifier":4,"chance":100},"hp":17,"ac":13,"str":17,"strModifier":"+3","dex":18,"dexModifier":"+4","con":15,"conModifier":"+2","int":10,"intModifier":"+0","wis":13,"wisModifier":"+1","cha":16,"chaModifier":"+3","coins":542,"name":"Olwyn Everson","sex":"Female","race":"Orc","class":"Wizard","height":"171cm (5'7\")","background":{"background":"Peasant","chance":1000},"description":"Olwyn Everson is a Orc Wizard, who has 3 sibling(s), and was born in a Tower and rasied by a Temple. Olwyn Everson lives in the upper Isle of Zenaria, where she lives out her days as a Peasant. Growing up she often went hunting and foraging and was taught essential survival skills.","image_url":"data:image/png;base64,iVBORw0KGgoAAAAN","sprite_url":"data:image/png;base64,iVBORw0K","weapon_url":"data:image/png;base64,iVBORw0KG","seed":"0"}```

----

## Completed Features:

- Random Character Stats.
- Random Character General Information.
- First Names Based on Sex.
- Random Pixel Weapon Generation.
- Weapons based on class.
- Weapon information outlined with bronze,
  silver, gold, purple, based on rarity.
- Card is given a rarity trim determined
  by the characters stats.
- Random Pixel Character Generation.
- Random Character Names.
- Random weapon modifier.
- Random Armor pieces (Head, Chest, Legs) which gives random armor class (AC).
- Randomisied Abilities (maybe acility stats random).(Removed)
- Canvas image can be scaled by adding a scale
  to the url (/[scale]x.png).
- JSON file reader for
  all random content.
- Characters are saved and written to
  characters.json for later use.
