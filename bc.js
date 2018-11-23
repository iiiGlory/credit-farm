const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', async(1) => {
	console.log(Logged in as ${client.user.tag}!);
var server = "399549569769144320"; // ايدي السررفر
var channel = "515593865575661578";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory, ')
    },305);
})

client.login("NTA2NDU3OTE2MTQ5MDcxODcy.DtmCRA.l_5bDZPuS1f8Um0eSmfuPrbzddk");