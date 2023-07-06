
import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import 'dotenv/config'
import axios from 'axios';
import retry from 'async-retry';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const baldbuy = "https://media.tenor.com/ciNDyf6AgH0AAAAd/disappointed-disappointed-fan.gif"
const what = "https://media.tenor.com/xOf2-hefBXIAAAAd/huh.gif"

function main() {
    console.log("Bot Started")
    client.login(process.env.DISCORD_BOT_TOKEN);
    client.on("messageCreate", (message) => {
        if (message.content.startsWith(process.env.COMMAND_STARTS_WITH)) {
            if (message.content.split(" ").length < 2) {
                const embeds = new EmbedBuilder()
                    .setImage(what)
                message.reply({ embeds: [embeds] });
            }
            else {
                const id = message.content.split(" ")[1].trimStart("0");
                if (isNaN(id) || Number(id) > process.env.COLLECTION_SIZE) {
                    const embeds = new EmbedBuilder()
                        .setImage(baldbuy)
                    message.reply({ embeds: [embeds] });
                } else {
                    getTokenData(process.env.CONTRACT_ADDRESS, Number(id)).then((data) => {
                        if (data.image_url != null) {
                            const embeds = new EmbedBuilder()
                                .setTitle(`${process.env.TOKEN_NAME} #${Number(id)}`)
                                .setColor(5174599)
                                .setURL(`https://opensea.io/assets/ethereum/${process.env.CONTRACT_ADDRESS}/${Number(id)}`)
                                .setImage(data.image_url)
                            message.reply({ embeds: [embeds] });
                        } else {
                            message.reply("Bot died while fetching. Try later")
                        }
                    })
                }
            }
        }
    });
}


async function getTokenData(contract, tokenId) {
    try {
        const assetName = await retry(
            async (bail) => {
                const response = await axios.get(
                    `https://api.opensea.io/api/v1/asset/${contract}/${tokenId}`
                    ,
                    {
                        headers: {
                            'X-API-KEY': process.env['X-API-KEY']
                        }
                    }
                );
                return {
                    image_url: response.data['image_url']
                };
            }
            ,
            {
                retries: 0,
                minTimeout: 5000
            }
        );

        return assetName;
    } catch (error) {
        console.error(error.message);
        return {
            image_url: null
        };
    }
}


main()