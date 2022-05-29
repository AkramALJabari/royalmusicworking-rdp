const fetch = require("node-fetch");
module.exports = {
  name: "chess",
  aliases: [""],
  description: "تشغيل ميزة الشطرنج",
  async execute(message, args) {
    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send("يجب عليك دخول روم صوتي اولاً")
    await fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
          method: 'POST',
          body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "832012774040141894",
            target_type: 2,
            temporary: false,
            validate: null,
          }),
          headers: {
            Authorization: `Bot ${message.client.token}`,
            'Content-Type': 'application/json',
          },
        })
    .then((res) => res.json())
    .then(invite => {
        if(!invite.code) return message.channel.send(`**I can't start the activity**`)
        message.channel.send(`https://discord.com/invite/${invite.code}`)
    })
  }
};