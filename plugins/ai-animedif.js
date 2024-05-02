import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
        let wm = global.me
        if (!text) throw `This command generates image from texts\n\n Example usage\n${ usedPrefix + command } 1girl, blush, megane, school uniform`
        await m.reply('*Processing image*')
        try {
        let ff = await fetch(`https://api.neoxr.eu/api/waifudiff?q=${text}`)
        let anu = await ff.json()
        await conn.sendFile(m.chat, anu.data.url, 'image.jpg', `Prompt: ${text}`, m)
      } catch (e) {
        console.log(e)
        m.reply(error)
      }
    }

handler.help = ['animediff <text>']
handler.tags = ['ai']
handler.command = /^(animediff)$/i

handler.register = true

export default handler