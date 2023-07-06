# Ping My NFT on Discord 🤖

## How to setup

- run `npm install`
- Set value in `.env` file
  - `CONTRACT_ADDRESS` - Your collection contract's address
  - `COLLECTION_SIZE` - Total no. of NFTs in your collection
  - `TOKEN_NAME` - Title of your embed on discord
  - `X-API-KEY` - Opensea's API Key
  - `DISCORD_BOT_TOKEN` - Your discord bot token. You can find it in [discord developer portal](https://discord.com/developers/applications), after creating your bot
  - `COMMAND_STARTS_WITH` first message on discord that will trigger your bot

- run `node index.js ` to start the bot

## How to use

- `$m tokenID`
  - Send this message in the discord channel where you have invited your bot

## Donations

ETH/BSC - 0x64Dc82955841fD5Ef8155D5cE0b12a77DEb88879