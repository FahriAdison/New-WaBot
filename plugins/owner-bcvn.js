import { toPTT } from '../lib/converter.js' 
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix, text }) => {
	let user = global.db.data.users[m.sender]
 if (!text) throw 'Teks Nya Mana?'
	let haori = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999999,
    status: 404,
    surface : 404,
    message: `© KAGUMI BROADCAST\nFrom ${conn.getName(m.sender)} 🌠`, 
    orderTitle: `▮By Hikosova  ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/d22003d24ff779724cc58.jpg')).buffer(),
    }
    }
    }
      let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
 let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Gagal melakukan konversi.'
    let chats = Object.entries(await conn.groupFetchAllParticipating()).filter(([jid, chat]) => !chat?.announce).map(v => v[0])
  conn.reply(m.chat, `Mengirim pesan broadcast ke ${chats.length} chat`, m)
  for (let id of chats) {
       await conn.delay(1500)
     await  await    await conn.sendFile(id, audio.data, 'error.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, contextInfo: { forwardingScore: 999, isForwarded: true,
         externalAdReply: { 
             title: 'ꕥ─────•「 AUDIO BROADCAST 」•─────ꕥ',  
             body: '📢 Isi Pesan :' + text,
             description: '',  
             mediaType: 2, 
           thumbnail: await (await fetch(fla + 'Broadcast')).buffer(), 
          mediaUrl: `https://youtu.be/35w7z9QFLwY` 
         } 
      } 
   })
}
    m.reply('Broadcast Finished')
}
handler.help = ['bcavn'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastvn|bcvn)$/i

handler.owner = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))