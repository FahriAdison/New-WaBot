import fetch from 'node-fetch'
import axios from'axios'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, 'Ｌｏａｄｉｎｇ．．．', m)

let type = (command).toLowerCase()

switch (type) {
case 'ahegao':
case 'ass':
  conn.sendFile(m.chat, `https://api.marinkitagawa.toys/api/nsfw/${command}?apikey=${marin}`, '', `Random Image ${command}`, m)
break

case 'nsfwwaifu':
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'ERROR 404'
  conn.sendFile(m.chat, json.url, '', 'Random Image Nsfw Waifu', m)
break

case 'nsfwneko':
  let _neko = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw 'ERROR 404'
  conn.sendFile(m.chat, neko.url, '', 'Random Image Nsfw Neko',m)
break 

case 'trap':
  let _trap = await fetch('https://api.waifu.pics/nsfw/trap')
  if (!_trap.ok) throw await _trap.text()
  let trap = await _trap.json()
  if (!trap.url) throw 'ERROR 404'
  conn.sendFile(m.chat, trap.url, '','Random Image Nsfw Trap',m)
break

case 'blowjob':
  let _blowjob = await 
fetch('https://api.waifu.pics/nsfw/blowjob')
  if (!_blowjob.ok) throw await _blowjob.text()
  let blowjob = await _blowjob.json()
  if (!blowjob.url) throw 'ERROR 404'
  let stiker = await sticker(null, blowjob.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
break
    
  case 'oppai':
 try {
  let ress = await axios.get('https://api.waifu.im/search/?included_tags=oppai&is_nsfw=true');
  if (ress.data.images.length > 0) {
    conn.sendFile(m.chat, ress.data.images[0].url, 'image.jpg', `Random Image ${command}`, m);
  } else {
    throw 'ERROR 404';
  }
} catch (e) {
  m.reply('error')
}
    break
    
default:
 }
}

handler.help = ['ahegao', 'ass', 'blowjob', 'nsfwwaifu', 'nsfwneko', 'trap', 'oppai']
handler.tags = ['nsfw']
handler.command = /^(nsfwwaifu|nsfwneko|trap|blowjob|ahegao|ass|oppai)$/i
handler.register = true;
handler.private = true

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}