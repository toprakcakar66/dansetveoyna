const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "-";
let owner = "427061793123205131";

bot.on("ready", () => {
    bot.user.setGame(prefix + "yardım | ") 
    console.log("Bağlandım!")   
});

bot.login("NDQzMjcwNTIxOTE3MDE0MDM2.DdK7Ww.G-c9KhSmiqwRPDHWbLAHodjpuw4")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleyküm Selam!**")
    }

    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content.toLowerCase() === prefix + "yapımcı") {
      message.reply("Toprak T#9528", {files:["./fotolar/toprak.jpg"]})
  }

    if (message.content === prefix + "bilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "danset") {
        message.channel.sendMessage("Dans ederek 10 puan kazandın", {files:["./fotolar/tenor.gif"]})
    }

    if (message.content === prefix + "yardım") {
        message.channel.sendMessage(stripIndents`
**Selam, ben ${bot.user.username}!** Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.

**Bilgi Komutları**
\`\`\`fix
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
\`\`\`

**Eğlence Komutları**
\`\`\`fix
${prefix}kurabiye - Size kurabiye verir.
\`\`\` `)
    }

});

bot.on("message", message => {

    const kufur = ["amk", "aq"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Küfür Etme!** :rage:")
        message.delete()
    }

});

bot.on('message', msg => {
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

  const args = msg.content.split(" ").slice(1);

  if (msg.content.startsWith(prefix+ "eval")) {
    if(msg.author.id !== "427061793123205131") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      msg.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

bot.on("message", message => {

  const reklam = ["http"];
  if (reklam.some(word => message.content.includes(word)) ) {
      message.reply("**Reklam YASAK!**")
      message.delete()
  }

});

