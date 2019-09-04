const Discord = require('discord.js')
const AhmedSniper = new Discord.Client();
const client = new Discord.Client();


AhmedSniper.on('ready', () => {
console.log(`${AhmedSniper.guilds.size} سيرفر`)
console.log(`انا هنيك كوسك XD`)
console.log(`${AhmedSniper.user.tag}`)
AhmedSniper.user.setStatus("dnd")
});




var adminprefix = '$'
const developers = ["y446399405679968277"]
AhmedSniper.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'Sp')) {
    AhmedSniper.user.setGame(argresult);                                //Code By : Ahmed Sniper 
      message.channel.send(`**✅ | The Playing Status Has Been Changed To : ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "dsadsfal854464")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'Sw')) {
  AhmedSniper.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`*✅* | The Watching Status Has Been Changed To : ${argresult}  `)
  } else 
  if (message.content.startsWith(adminprefix + 'Sl')) {
  AhmedSniper.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`*✅* | The Listening Status Has Been Changed To : ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'St')) {
    AhmedSniper.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`*✅* | The Streaming Status Has Been Changed To : ${argresult} `)
  }
  if (message.content.startsWith(adminprefix + 'Setname')) {
  AhmedSniper.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'Setava')) {
  AhmedSniper.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});




//نهايت الكود الى من صنع : AhmedSniper
AhmedSniper.login('"mfa.zFZ-75-f0ES_seP8BM6XVnOu5Nb8y7MYGufMb_YU9aigbty3eGKfjorTJdUlRHNoQtsMBLqfJzjLgn-H7-xr"'); //حط هنا التوكن Ahmed Sniper

