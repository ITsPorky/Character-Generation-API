# Character Generator API Documentation

Welcome to the Character Generator API documentation. This API allows you to dynamically generate unique characters, their metadata, and associated images. Below, we provide a comprehensive guide on how to use this API effectively.

## Quick Links for Testing

To generate characters, you can adjust the seed value in the URL. The seed value determines the character's properties, and using the same seed will produce the same character. Here are some quick links for testing:

#### Version 1 Quick Links

- **Pre-generated Characters Card**: [Generate Character Card](https://character-gen-api.onrender.com/v1/special/0/1x.png)
- **Pre-generated Characters Metadata**: [Generate Character Metadata](https://character-gen-api.onrender.com/v1/special/0/metadata)
- **Seeded Characters Card**: [Generate Seeded Character Card](https://character-gen-api.onrender.com/v1/seed/0/1x.png)
- **Seeded Characters Metadata**: [Generate Seeded Character Metadata](https://character-gen-api.onrender.com/v1/seed/0/metadata)
- **Seeded Characters Sprite**: [Generate Seeded Character Sprite](https://character-gen-api.onrender.com/v1/sprite/seed/0/10x.png)
- **Seeded Characters Weapon Sprite**: [Generate Seeded Character Weapon Sprite](https://character-gen-api.onrender.com/v1/weapon/seed/0/10x.png)

#### Version 2 Quick Links

- **Pre-generated Characters Card**: [Generate Character Card](https://character-gen-api.onrender.com/v2/special/0/1x.png)
- **Pre-generated Characters Metadata**: [Generate Character Metadata](https://character-gen-api.onrender.com/v2/special/0/metadata)
- **Seeded Characters Card**: [Generate Seeded Character Card](https://character-gen-api.onrender.com/v2/seed/0/1x.png)
- **Seeded Characters Metadata**: [Generate Seeded Character Metadata](https://character-gen-api.onrender.com/v2/seed/0/metadata)
- **Seeded Characters Sprite**: [Generate Seeded Character Sprite](https://character-gen-api.onrender.com/v2/sprite/seed/0/10x.png)
- **Seeded Characters Weapon Sprite**: [Generate Seeded Character Weapon Sprite](https://character-gen-api.onrender.com/v2/weapon/seed/0/10x.png)

## Understanding Response Types

This API offers several response types that you can request to create diverse characters. The API also includes versions that can be used to generate different styles of character design:

### Version 1

#### Character Card (format: `.png`)

To obtain a Character Card, use the following URL format: `/v1/seed/{seed_value}/1x.png`.

- `/v1` intructs the API to use the version 1 style of generation.
- `/seed` instructs the API to generate a character based on a given seed value.
- `{seed_value}` should be a hexadecimal value (0-9 and a-f) that determines the character's properties.
- `/1x.png` returns the default-sized Character Card. You can increase the size with `/2x.png` or other options (up to `5x.png`), but note that larger images can strain the API server.

**Example Response**:  
![Seeded Characters Card](https://character-gen-api.onrender.com/seed/0/1x.png)

#### Character Sprite (format: `.png`)

To retrieve a Character Sprite, use the URL format: `/v1/sprite/seed/{seed_value}/1x.png`.

- `/v1` intructs the API to use the version 1 style of generation.
- `/sprite` indicates the API to generate only the character sprite for a given seed value.
- `/seed` specifies the seed to be used.
- `{seed_value}` is the hexadecimal seed value for character generation.
- `/1x.png` provides the default size of the Character Sprite, but you can adjust it as needed (up to `10x.png`).

**Example Response**:  
![Seeded Character Sprite](https://character-gen-api.onrender.com/sprite/seed/0/10x.png)

#### Weapon Sprite (format: `.png`)

To obtain a Weapon Sprite, use the URL format: `/v1/weapon/seed/{seed_value}/1x.png`.

- `/v1` intructs the API to use the version 1 style of generation.
- `/weapon` instructs the API to generate only the weapon sprite for a given seed value.
- `/seed` specifies the seed to be used.
- `{seed_value}` is the hexadecimal seed value for weapon generation.
- `/1x.png` provides the default size of the Weapon Sprite, but you can adjust it as needed (up to `10x.png`).

**Example Response**:  
![Seeded Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)

#### Character Metadata (format: `JSON`)

To retrieve Character Metadata, use the URL format: `/v1/seed/{seed_value}/metadata`.

- `/v1` intructs the API to use the version 1 style of generation.
- `/seed` instructs the API to generate character data for a given seed value.
- `{seed_value}` is the string of characters used for the seed value for character generation.

This response includes all the information generated for the character, such as character card URL, character sprite URL, weapon sprite URL, and additional information not displayed on the character card.

### Version 2

Work in progress...

## Features

This API offers a variety of features for creating unique characters, including:

- Random Character Stats (Based on RPGs like Dungeons & Dragons).
- Stat Modifiers (Based on stat values).
- Random Character General Information.
- Random Character names.
- Random Pixel Weapon Generation (Includes magic or unique weapons).
- Weapons based on class.
- Weapon information categorized by rarity (bronze, silver, gold, purple).
- Character card rarity determined by character stats (bronze, silver, gold, purple).
- Random Pixel Character Generation.
- Random weapon modifier (Based on weapon type).
- Random Clothes/ Armor pieces (Head, Chest, Legs) with random armor class (AC which contributes to character stats).

We hope this documentation helps you make the most of the Character Generator API. Feel free to explore and create unique characters for your applications or projects!
