# Character Generator API Documentation

Welcome to the official documentation for the Character Generator API. This API empowers you to dynamically generate distinct characters, complete with metadata and associated images. Below is an extensive guide on effectively utilising this API.

## Quick Links for Testing

To generate characters, manipulate the seed value in the URL, determining the character's properties. Repeating the same seed will yield the identical character. Below are quick links for testing:

#### Version 1 Quick Links

- **Pre-generated Characters Card**: [Generate Character Card](https://character-gen-api.onrender.com/v1/special/0/1x.png)
- **Pre-generated Characters Metadata**: [Generate Character Metadata](https://character-gen-api.onrender.com/v1/special/0/metadata)
- **Seeded Characters Card**: [Generate Seeded Character Card](https://character-gen-api.onrender.com/v1/card/seed/0/1x.png)
- **Seeded Characters Full Card**: [Generate Seeded Character Full Card](https://character-gen-api.onrender.com/v1/fullcard/seed/0/1x.png)
- **Seeded Characters Metadata**: [Generate Seeded Character Metadata](https://character-gen-api.onrender.com/v1/seed/0/metadata)
- **Seeded Characters Sprite**: [Generate Seeded Character Sprite](https://character-gen-api.onrender.com/v1/sprite/seed/0/10x.png)
- **Seeded Characters Weapon Sprite**: [Generate Seeded Character Weapon Sprite](https://character-gen-api.onrender.com/v1/weapon/seed/0/10x.png)

#### Version 2 Quick Links

**Note: Version 2 is currently in progress.**

## Understanding Response Types

This API provides various response types for creating diverse characters. It includes different versions for generating distinct styles of character design:

### Version 1

#### Character Card (format: `.png`)

To obtain a Character Card, use the following URL format: `/v1/card/seed/{seed_value}/1x.png`.

- `/v1` instructs the API to use version 1 style.
- `/card` instructs the API to generate the card format.
- `/seed` indicates character generation based on a given seed value.
- `{seed_value}` should be a hexadecimal value (0-9 and a-f) determining the character's properties.
- `/1x.png` returns the default-sized Character Card. You can adjust the size with `/2x.png` or other options (up to `5x.png`), but note that larger images may strain the API server.

**Example Response**:  
![Seeded Characters Card](https://character-gen-api.onrender.com/seed/0/1x.png)

#### Character Sprite (format: `.png`)

To retrieve a Character Sprite, use the URL format: `/v1/sprite/seed/{seed_value}/1x.png`.

- `/v1` instructs the API to use version 1 style.
- `/sprite` generates only the character sprite.
- `/seed` specifies the seed value.
- `{seed_value}` is the hexadecimal seed value.
- `/1x.png` provides the default size of the Character Sprite, adjustable as needed (up to `10x.png`).

**Example Response**:  
![Seeded Character Sprite](https://character-gen-api.onrender.com/sprite/seed/0/10x.png)

#### Weapon Sprite (format: `.png`)

To obtain a Weapon Sprite, use the URL format: `/v1/weapon/seed/{seed_value}/1x.png`.

- `/v1` instructs the API to use version 1 style.
- `/weapon` generates only the weapon sprite.
- `/seed` specifies the seed value.
- `{seed_value}` is the hexadecimal seed value.
- `/1x.png` provides the default size of the Weapon Sprite, adjustable as needed (up to `10x.png`).

**Example Response**:  
![Seeded Weapon Sprite](https://character-gen-api.onrender.com/weapon/seed/0/10x.png)

#### Character Metadata (format: `JSON`)

To retrieve Character Metadata, use the URL format: `/v1/seed/{seed_value}/metadata`.

- `/v1` instructs the API to use version 1 style.
- `/seed` generates character data for a given seed value.
- `{seed_value}` is the seed value for character generation.
- `metadata` instructs the API to return the metadata JSON.

This response includes all generated character information, such as character card URL, character sprite URL, weapon sprite URL, and additional data not displayed on the character card.

### Version 2

Work in progress...

## Features

This API provides numerous features for creating unique characters, including:

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
- Random Clothes/Armor pieces (Head, Chest, Legs) with random armor class (AC contributing to character stats).

## Project Overview

This section provides an overview of the key learnings and challenges encountered during the development of this project.

#### Key Learnings

Throughout the course of this project, I acquired valuable skills and knowledge in the following areas:

- Proficiency in performing data exchange through URL API calls.
- Mastery of setting up routes using node.js and express.js to efficiently handle and deliver requested data.
- Implementation of data sanitization techniques, leveraging Regular Expressions (RegEx) to ensure the acceptance of only authorized data.
- Enhanced skills in crafting comprehensive documentation, emphasizing the importance of documenting the project concurrently with its development to capture crucial information.
- Utilization of SHA-256 and manipulation of big numbers for secure and efficient data handling.

#### Overcoming Challenges

In the pursuit of project completion, several challenges were encountered and successfully addressed:

- **Challenge 1: Node.js and API Routing**
  - Overcame by dedicating time to learn and research the intricacies of node.js and the establishment of API routes. Reference to existing documentation and other APIs played a pivotal role in achieving proficiency.

- **Challenge 2: SHA-256 and Big Numbers**
  - Successfully addressed by investing time in acquiring an understanding of SHA-256 and big number manipulation. Extensive research and practical application were undertaken to ensure their effective utilization in the character generation process.

This documentation is designed to facilitate your seamless utilization of the Character Generator API. Feel free to explore its functionalities and experience the benefits it offers.