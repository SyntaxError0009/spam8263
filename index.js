   const express = require('express');
const app = express();
const readyFunction = require("./readyFunction.js")

app.get('/', (req, res) => {
  res.send('Spam Project By Just HAMAA')
});

app.listen(3000)
const Discord = require("discord.js-v11-fixes");
const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();

readyFunction.run(client1)
readyFunction.run(client2)
readyFunction.run(client3)
readyFunction.run(client4)
readyFunction.run(client5)
readyFunction.run(client6)
readyFunction.run(client7)
readyFunction.run(client8)
readyFunction.run(client9)
readyFunction.run(client10)
//----

client1.login(process.env.TOKEN1).catch(() => {})
client2.login(process.env.TOKEN2).catch(() => {})
client3.login(process.env.TOKEN3).catch(() => {})
client4.login(process.env.TOKEN4).catch(() => {})
client5.login(process.env.TOKEN5).catch(() => {})
client6.login(process.env.TOKEN6).catch(() => {})
client7.login(process.env.TOKEN7).catch(() => {})
client8.login(process.env.TOKEN8).catch(() => {})
client9.login(process.env.TOKEN9).catch(() => {})
client10.login(process.env.TOKEN10).catch(() => {})

