const { GuildAuditLogs, Client, Intents, MessageSelectMenu, MessageButton, MessageActionRow, MessageEmbed, ClientUser, Modal, TextInputComponent, Guild, GuildAuditLogsEntry, MessageSelectMenuBuilder, version , SelectMenuInteraction, Permissions , MessageAttachment  , Collection   } = require("discord.js")
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.MESSAGE_CONTENT,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_WEBHOOKS,
    ]
})




client.on('ready', () => {
        client.user.setActivity(`بوت عمك  `, {type:"PLAYING"})
        client.user.setStatus("online");
});





client.on('messageCreate', async message => {

    let antimembers = ["1059760626295132210",
     "981610670757904495",
     "845933807345074186"
    ];
  
    antimembers.forEach(async member => {
  
      if (
        !message.author.bot && 
        message.content.includes(`<@${member}>`) &&
        message.author !== message.client.user
      ) {
  
        let user = message.member;
  
        
  
          await message.reply({
  content: "⚠️تحذير يرجى عدم إزعاج طاقم العمل."
});

await message.delete();
  
      }
  
    });
  
  });
  
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', error => {
  console.error('Uncaught exception:', error);
});


  client.login(process.env.TOKEN)




