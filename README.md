# API Instructions

## Usefull links

[Pre-generated Characters Card](http://localhost:3030/0/1x.png)
[Pre-generated Characters Metadata](http://localhost:3030/0/metadata)
[Seeded Characters Card](http://localhost:3030/seed/0/1x.png)
[Seeded Characters Metadata](http://localhost:3030/seed/0/metadata)

[Pre-generated Characters Sprite](http://localhost:3030/sprite/0/1x.png)
[Seeded Characters Sprite](http://localhost:3030/sprite/0/1x.png)

[Pre-generated Characters Weapon Sprite](http://localhost:3030/weapon/0/1x.png)
[Seeded Characters Weapon Sprite](http://localhost:3030/sprite/weapon/1x.png)

## Setup

Run `npm init` inside the `api` directory to install all dependencies for the API.

In Order for this to work. You must create an environment file `.env` and
assign values to These variables inside there:

```
INFURA_NETWORK=""
INFURA_API_KEY=""
DGC_ADDRESS=""
PORT=
```

`INFURA_NETWORK` being the network you wish to access from (rinkeby, mainet, etc).  
`INFURA_API_KEY` being your API key from Infura.  
`DGC_ADDRESS` being the address of the contract.  
`PORT` being the port you wihs the API to open on.

## Assets

All assets are stored in the `assets` directory. This contains all art and `.json` files containing information about the assets.

## Source Files

All SOurce files are within the `src` directory. `src` contains the files responsible for the generation, drawing and utils of the API.
