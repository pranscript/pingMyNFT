# Ping My NFT on Discord 🤖

## How to setup

- run `npm install`
- Set value in `.env` file
  - `CONTRACT_ADDRESS` - Your collection contract's address
  - `COLLECTION_SIZE` - Total no. of NFTs in your collection
  - `TOKEN_NAME` - Title of your embed on discord
  - `X-API-KEY` - Opensea's API Key
  - `DISCORD_BOT_TOKEN` - Your discord bot token. You can find it in [discord developer portal](https://discord.com/developers/applications), after creating your bot. Steps mentioned down below
  - `COMMAND_STARTS_WITH` - first message on discord that will trigger your bot

- run `node index.js ` to start the bot

## How to add discord bot to your discord server

- Visit [discord developer portal](https://discord.com/developers/applications)
- Create new application
- Go to "Bot" section from the sidebar
  - Click on "Reset Token" button. This is your discord bot token. Copy and save it in the ``.env`` file
  - Scroll down and turn ON "MESSAGE CONTENT INTENT" option
- Go to "OAuth2 -> URL Generator" section from the sidebar
  - select "bot" option
  - Scroll down to the bottom and copy the Generated URL. This URL will be used to add the bot to the server
  - Paste the URL in the browser and add the bot to your server

## How to use

- `$m tokenID`
  - Send this message in the discord channel where you have invited your bot

## Donations

ETH/BSC - 0x64Dc82955841fD5Ef8155D5cE0b12a77DEb88879