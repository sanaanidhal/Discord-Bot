import { Client , Events , GatewayIntentBits } from  'discord.js' ;
import { config } from 'dotenv' ;
import * as choochoo from './commands/choochoo.js'; 

config(); 

console.log(process.env.SERVERID);

// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyDiscord);

function readyDiscord() {
    console.log('💖'+ client.user.tag);
} 
async function InteractionHandle (interaction){
    if(!interaction.isCommand()) return;
    if(interaction.commandName === 'choochoo'){
        await choochoo.execute(interaction);
    }
}
// Login to Discord with your client's token
client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, InteractionHandle);
