const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { token } = require('./token.json');
const { prefix }= require('./config.json');
const { getInfo } = require('ytdl-core');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const date = new Date();
const CurrentDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

//login
client.on('ready', () => {
    console.log(`[UTC+8 ` + CurrentDate + `]` + `${client.user.tag} log in successfully!`);
    console.log(`------------------------------------- log -------------------------------------`);
});

//ping
client.on('message', msg => {
        if (msg.content === 'ping') {
             msg.reply('> pong');
        }
    });

//help command page 1
client.on('message', msg => {
    if (msg.content === `${prefix}help`) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('機器人幫助頁面',)
            .setDescription('>help 2 前往第二頁')
            .addField("** **", "** **")
            .addField('>join', '加入語言頻道 (任何音樂類的指令，必須在機器人加入語言頻道後，才能運行)')
            .addField('>play', '播放音樂 (目前只支援Youtube鏈結)')
            .addField('>skip', '跳過音樂')
            .addField('>leave', '離開語言頻道')
            .addField('>pause', '暫停音樂')
            .setFooter('bot made by moli', 'https://imgur.com/a/RUjivd7' );
        msg.channel.send(embed);
        console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >help successfully!`);
        console.log(`-------------------------------------------------------------------------------`);
    }
});

//help command page 2
client.on('message', msg => {
    if (msg.content === `${prefix}help 2`) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('機器人幫助頁面',)
            .setDescription('>help 前往第一頁')
            .addField("** **", "** **")
            .addField('>queue', '顯示隊列')
            .addField('>invite', '邀請我到你的伺服器')
            .addField('>info', '顯示機器人資訊頁面')
            .setFooter('bot made by moli', 'https://imgur.com/a/RUjivd7' );
        msg.channel.send(embed);
        console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >help 2 successfully!`);
        console.log(`-------------------------------------------------------------------------------`);
    }
});

//invite command
client.on('message', msg => {
    if (msg.content === `${prefix}invite`) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('機器人邀請頁面')
            .setDescription('小提示：>help 機器人幫助頁面')
            .addField("** **", "** **")
            .addField('邀請連結', 'https://discord.com/oauth2/authorize?client_id=688667881004859437&permissions=8&scope=bot%20applications.commands')
            .setFooter('bot made by moli', 'https://imgur.com/a/RUjivd7' );
        msg.channel.send(embed);
        console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >invite successfully!`);
        console.log(`-------------------------------------------------------------------------------`);
    }
});

//info command
client.on('message', msg => {
    if (msg.content === `${prefix}info`) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('機器人資訊')
            .addField("** **", "** **")
            .addField('作者的資訊', '大家好，我叫moli，我是一個中學生，是一個普通人')
            .addField('這個機器人的用途', '播放音樂，管理伺服器')
            .addField('作者的話', '首先，我很感謝大家的支持，使這個機器人能營運至今，請大家繼續使用這個機器人')
            .setFooter('bot made by moli', 'https://imgur.com/a/RUjivd7' );
        msg.channel.send(embed);
        console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >info successfully!`);
        console.log(`-------------------------------------------------------------------------------`);
    }
});

//gay command
client.on('message', msg => {
    if(msg.author.bot)return;
    if(msg.content.startsWith(">gay")){
        const GayTarget = msg.content.replace(`${prefix}gay`,'').trim();
        if(GayTarget === '<@!685116987201814592>'||GayTarget === '<@!688667881004859437>'||GayTarget === '<@!677400680876736512>'){
            const embed = new Discord.MessageEmbed()
                .setTitle('Gay')
                .addField(`恭喜你發現了隱藏指令`, `但是這個人絕對不是Gay的`)
                .setColor('#0099ff')
                .setFooter('bot made by moli', 'https://imgur.com/a/RUjivd7' );
            msg.channel.send(embed);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >gay successfully!`);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `Gay target: ${GayTarget}`);
            console.log(`-------------------------------------------------------------------------------`);
            } else if(GayTarget === '<@!743113202560139307>'){
                const embed = new Discord.MessageEmbed()
                    .setTitle('Gay')
                    .addField(`恭喜你發現了隱藏指令`, `${GayTarget} 絕對是Gay的`)
                    .setColor('#0099ff')
                    .setFooter('bot made by moli', 'https://imgur.com/a/RUjivd7' );
                msg.channel.send(embed);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >gay successfully!`);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `Gay target: ${GayTarget}`);
                console.log(`-------------------------------------------------------------------------------`);
                } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Gay')
                    .addField(`恭喜你發現了隱藏指令`, `${GayTarget} is gay`)
                    .setColor('#0099ff')
                    .setFooter('bot made by moli', 'https://imgur.com/a/RUjivd7' );
                msg.channel.send(embed);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >gay successfully!`);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `Gay target: ${GayTarget}`);
                console.log(`-------------------------------------------------------------------------------`);
            }
    }
});
//music command
class Music {

    constructor() {
        this.isPlaying = {};
        this.queue = {};
        this.connection = {};
        this.dispatcher = {};
    }

    //join command
    async join(msg) {
        if (msg.member.voice.channel !== null) {
            this.connection[msg.guild.id] = await msg.member.voice.channel.join();
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >join successfully!`);
            console.log(`-------------------------------------------------------------------------------`);
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle('請你先進入語言頻道。')
                .setColor('#0099ff')
            msg.channel.send(embed);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >join, but unsuccessful`);
            console.log(`-------------------------------------------------------------------------------`);
        }
    }

    //play command
    async play(msg) {
        const guildID = msg.guild.id;
        if (!this.connection[guildID]) {
            const embed = new Discord.MessageEmbed()
                .setTitle('請先將機器人`>join`加入頻道')
                .setColor('#0099ff')
            msg.channel.send(embed);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >play, but unsuccessful!`);
            console.log(`-------------------------------------------------------------------------------`);
            return;
        }
        if (this.connection[guildID].status === 4) {
            const embed = new Discord.MessageEmbed()
                .setTitle('請先將機器人 >join 重新加入頻道')
                .setColor('#0099ff')
            msg.channel.send(embed);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >play, but unsuccessful!`);
            console.log(`-------------------------------------------------------------------------------`);
            return;
        }
        const musicURL = msg.content.replace(`${prefix}play`,'').trim();

        //add to the queue
        try {
            const res = await ytdl.getInfo(musicURL);
            const info = res.videoDetails;
            if (!this.queue[guildID]) {
                this.queue[guildID] = [];
            }
            this.queue[guildID].push({
                name: info.title,
                url: musicURL
            });
            if(this.isPlaying[guildID]) {
                const embed = new Discord.MessageEmbed()
                .setTitle('已成功將歌曲加入隊列')
                .addField('歌曲鏈結', `${musicURL}`)
                .setColor('#0099ff')
                msg.channel.send(embed)
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >play successfully!`);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `the song has been added into the queue`);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `link: ${musicURL}`);
                console.log(`-------------------------------------------------------------------------------`);
            } else {
                this.isPlaying[guildID] = true;
                this.playMusic(msg, guildID, this.queue[guildID][0]);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >play successfully!`);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `the song will be played now`);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `link: ${musicURL}`);
                console.log(`-------------------------------------------------------------------------------`);
            }
        } catch(e) {
            console.log(e);
        }
    }

    //play command
    playMusic(msg, guildID, musicInfo) {
        const musicURL = msg.content.replace(`${prefix}play`,'').trim();
        const embed = new Discord.MessageEmbed()
                .setTitle('目前正在播放的音樂')
                .addField(`${musicURL}`, '請好好享受音樂')
                .setColor('#0099ff')
                msg.channel.send(embed);
        this.dispatcher[guildID] = this.connection[guildID].play(ytdl(musicInfo.url, {filter: 'audioonly'}));
        this.dispatcher[guildID].setVolume(0.5);
        this.queue[guildID].shift();
        this.dispatcher[guildID].on('finish', () => {
            if (this.queue[guildID].length > 0){
                this.playMusic(msg, guildID, this.queue[guildID][0]);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `Current song: ${musicURL}`);
                console.log(`-------------------------------------------------------------------------------`);
            } else {
                this.isPlaying[guildID] = false;
                const embed = new Discord.MessageEmbed()
                .setTitle('音樂播曬啦，快D加多D音樂啦 :D')
                .setColor('#0099ff')
                msg.channel.send(embed);
                console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `queue was ended`);
                console.log(`-------------------------------------------------------------------------------`);
            }
        });
    }

    //resume command
    resume(msg) {
        if (this.dispatcher[msg.guild.id]) {
            const embed = new Discord.MessageEmbed()
                .setTitle('恢復播放')
                .setColor('#0099ff')
            msg.channel.send(embed);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >resume successfully!`);
            console.log(`-------------------------------------------------------------------------------`);
            this.dispatcher[msg.guild.id].resume();
        }
    }

    //pause command
    pause(msg) {
        if (this.dispatcher[msg.guild.id]) {
            const embed = new Discord.MessageEmbed()
                .setTitle('暫停播放')
                .setColor('#0099ff')
            msg.channel.send(embed)
            this.dispatcher[msg.guild.id].pause();
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >pause successfully!`);
            console.log(`-------------------------------------------------------------------------------`);
        }
    }

    //skip command
    skip(msg) {
        if (this.dispatcher[msg.guild.id]) {
            const embed = new Discord.MessageEmbed()
                .setTitle('跳過目前歌曲')
                .setColor('#0099ff')
            msg.channel.send(embed)
            this.dispatcher[msg.guild.id].end();
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >skip successfully!`);
            console.log(`-------------------------------------------------------------------------------`);
        }
    }

    //queue list
    nowQueue(msg) {
        if (this.queue[msg.guild.id] && this.queue[msg.guild.id].length > 0) {
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >queue successfully!`);
            console.log(`-------------------------------------------------------------------------------`);
            msg.channel.send(queueString); 
        } else {
            const embed = new Discord.MessageEmbed()
            .setTitle('目前隊列中沒有歌曲')
            .setColor('#0099ff')
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >queue successfully!`);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `no song is in the queue`);
            console.log(`-------------------------------------------------------------------------------`);
            msg.channel.send(embed);
        }
    }
    

    //leave command
    leave(msg) {
        if (this.connection[msg.guild.id] && this.connection[msg.guild.id].status === 0) {
            if (this.queue.hasOwnProperty(msg.guild.id)) {
                delete this.queue[msg.guild.id];
                this.isPlaying[msg.guild.id] = false;
            }
            this.connection[msg.guild.id].disconnect();
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >queue successfully!`);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${client.user.tag} disconnected! `);
            console.log(`------------------------------------------------------------------------------`);
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle('機器人未加入任何頻道')
                .setColor('#0099ff')
            msg.channel.send(embed);
            console.log(`[UTC+8 ` + CurrentDate + `]` + `[${msg.guild.name}]` + `${msg.author.tag} used >leave, but unsuccessful!`);
            console.log(`-------------------------------------------------------------------------------`);
        }
    }
}

const music = new Music();

client.on('message', async (msg) => {
    if (!msg.guild) return;
    if (msg.content === `${prefix}join`) {
        music.join(msg);
    }
    if (msg.content.indexOf(`${prefix}play`) > -1) {
        if (msg.member.voice.channel) {
            await music.play(msg);
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle('請你先進入語言頻道。')
                .setColor('#0099ff')
            msg.channel.send(embed);
        }
    }
    if (msg.content === `${prefix}resume`) {
        music.resume(msg);
    }
    if (msg.content === `${prefix}pause`) {
        music.pause(msg);
    }
    if (msg.content === `${prefix}skip`) {
        music.skip(msg);
    } 
    if (msg.content === `${prefix}queue`) {
        music.nowQueue(msg);
    } 
    if (msg.content === `${prefix}leave`) {
        music.leave(msg);
    }
});

client.login(token);