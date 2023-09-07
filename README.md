# Character Generator API Documentation

Welcome to the Character Generator API documentation. This API allows you to dynamically generate unique characters, their metadata, and associated images. Below, we provide a comprehensive guide on how to use this API effectively.

## Quick Links for Testing

To generate characters, you can adjust the seed value in the URL. The seed value determines the character's properties, and using the same seed will produce the same character. Here are some quick links for testing:

- **Pre-generated Characters Card**: [Generate Character Card](https://character-gen-api.onrender.com/special/0/1x.png)
- **Pre-generated Characters Metadata**: [Generate Character Metadata](https://character-gen-api.onrender.com/special/0/metadata)
- **Seeded Characters Card**: [Generate Seeded Character Card](https://character-gen-api.onrender.com/seed/0/1x.png)
- **Seeded Characters Metadata**: [Generate Seeded Character Metadata](https://character-gen-api.onrender.com/seed/0/metadata)
- **Seeded Characters Sprite**: [Generate Seeded Character Sprite](https://character-gen-api.onrender.com/sprite/seed/0/10x.png)
- **Seeded Characters Weapon Sprite**: [Generate Seeded Character Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)

## Understanding Response Types

<<<<<<< HEAD
This API offers several response types that you can request to create diverse characters:

### Character Card (format: `.png`)
=======
- [Seeded Characters Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)    

# Response Types
>>>>>>> feb8a04c174f429dbd432d733d93c5b78ece735c

To obtain a Character Card, use the following URL format: `/seed/{seed_value}/1x.png`.

<<<<<<< HEAD
- `/seed` instructs the API to generate a character based on a given seed value.
- `{seed_value}` should be a hexadecimal value (0-9 and a-f) that determines the character's properties.
- `/1x.png` returns the default-sized Character Card. You can increase the size with `/2x.png` or other options (up to `5x.png`), but note that larger images can strain the API server.

**Example Response**:  
![Seeded Characters Card](https://character-gen-api.onrender.com/seed/0/1x.png)

### Character Sprite (format: `.png`)
=======
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
>>>>>>> feb8a04c174f429dbd432d733d93c5b78ece735c

To retrieve a Character Sprite, use the URL format: `/sprite/seed/{seed_value}/1x.png`.

- `/sprite` indicates the API to generate only the character sprite for a given seed value.
- `/seed` specifies the seed to be used.
- `{seed_value}` is the hexadecimal seed value for character generation.
- `/1x.png` provides the default size of the Character Sprite, but you can adjust it as needed (up to `10x.png`).

<<<<<<< HEAD
**Example Response**:  
![Seeded Character Sprite](https://character-gen-api.onrender.com/sprite/seed/0/10x.png)

### Weapon Sprite (format: `.png`)
=======
Example response:     
![Seeded Character Sprite](https://character-gen-api.onrender.com/sprite/seed/0/10x.png)    

----

## Weapon Sprite (format: `.png`)
>>>>>>> feb8a04c174f429dbd432d733d93c5b78ece735c

To obtain a Weapon Sprite, use the URL format: `/weapon/seed/{seed_value}/1x.png`.

- `/weapon` instructs the API to generate only the weapon sprite for a given seed value.
- `/seed` specifies the seed to be used.
- `{seed_value}` is the hexadecimal seed value for weapon generation.
- `/1x.png` provides the default size of the Weapon Sprite, but you can adjust it as needed (up to `10x.png`).

<<<<<<< HEAD
**Example Response**:  
![Seeded Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)

### Character Metadata (format: `JSON`)
=======
Example response:    
![Seeded Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)    

----

## Character Metadata (format: `JSON`)
>>>>>>> feb8a04c174f429dbd432d733d93c5b78ece735c

To retrieve Character Metadata, use the URL format: `/seed/{seed_value}/metadata`.

- `/seed` instructs the API to generate character data for a given seed value.
- `{seed_value}` is the hexadecimal seed value for character generation.

<<<<<<< HEAD
This response includes all the information generated for the character, such as character card URL, character sprite URL, weapon sprite URL, and additional information not displayed on the character card.

## Completed Features

This API offers a variety of features for creating unique characters, including:
=======
Example response:    
```{"body":{"src":"./assets/body/body28.png","name":"Large Pointed Ear","race":"Orc"},"eyes":{"src":"./assets/eyes/eye6.png","name":"Purple","chance":100},"hair":{"src":"./assets/hair/hair64.png","name":"Long Ponytail","armor":0,"chance":100},"chest":{"src":"./assets/shirts/shirt16.png","armor":2,"name":"Leather Armor","chance":100},"legs":{"src":"./assets/legs/legs14.png","armor":1,"name":"Grey Pants","chance":100},"facialHair":{"src":"./assets/facial-hair/facial-hair1.png","name":"none","chance":100},"weapon":{"src":"./assets/weapons/staffs/staff42.png","type":"Staff","elemental":"Earth","damage":"d6","modifier":4,"chance":100},"hp":17,"ac":13,"str":17,"strModifier":"+3","dex":18,"dexModifier":"+4","con":15,"conModifier":"+2","int":10,"intModifier":"+0","wis":13,"wisModifier":"+1","cha":16,"chaModifier":"+3","coins":542,"name":"Olwyn Everson","sex":"Female","race":"Orc","class":"Wizard","height":"171cm (5'7\")","background":{"background":"Peasant","chance":1000},"description":"Olwyn Everson is a Orc Wizard, who has 3 sibling(s), and was born in a Tower and rasied by a Temple. Olwyn Everson lives in the upper Isle of Zenaria, where she lives out her days as a Peasant. Growing up she often went hunting and foraging and was taught essential survival skills.","image_url":"data:image/png;base64,iVBORw0KGgoAAAAN","sprite_url":"data:image/png;base64,iVBORw0K","weapon_url":"data:image/png;base64,iVBORw0KG","seed":"0"}```

----

## Completed Features:
>>>>>>> feb8a04c174f429dbd432d733d93c5b78ece735c

- Random Character Stats.
- Random Character General Information.
- First Names Based on Sex.
- Random Pixel Weapon Generation.
- Weapons based on class.
- Weapon information categorized by rarity (bronze, silver, gold, purple).
- Character card rarity determined by character stats.
- Random Pixel Character Generation.
- Random Character Names.
- Random weapon modifier.
- Random Armor pieces (Head, Chest, Legs) with random armor class (AC).
- JSON file reader for all random content.
- Character data is saved and stored in characters.json for later use.

We hope this documentation helps you make the most of the Character Generator API. Feel free to explore and create unique characters for your applications or projects!
