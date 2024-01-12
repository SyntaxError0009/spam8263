const config = require("./config.json")
const time = config.time * 1000
const messageContent = config.messageContent
const channelID = config.channelID
const on_off = config.on_off
const typeSpam = config.typeSpam
const chalk = require("chalk")

function readyFunction(client) {
  if (!client) throw new Error(" You Must Specify A Client To Run A Function")
	client.on("ready", () => {
  console.log(`Logged With ` + chalk.red.bold(client.user.tag))
	if (on_off == "on") {
    setInterval(() => {
			let room = client.channels.get(channelID)
			let finalMessage = messageContent[Math.floor(Math.random() * messageContent.length)]
			if (typeSpam === "user") {
        room = client.users.get(channelID)
			}
			if (!room) return;
      room.send(finalMessage).catch(() => {})
		},time)
	}
	})
}

module.exports.run = readyFunction;
