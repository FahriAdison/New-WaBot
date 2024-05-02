import fetch from 'node-fetch';

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw 'Input code'
    try {
        let res = await fetch(`https://apiv2.marinkitagawa.site/nhentai/${text}`)
        let json = await res.json()
        let result = json.result
        conn.sendMessage(m.chat, {
            react: {
                text: '⏳',
                key: m.key
            }
        })
        conn.sendMessage(m.chat, { document: { url: result }, fileName: `${text}.pdf`, mimetype: 'application/pdf' }, { quoted: m })
    } catch (error) {
        console.log(error)
        conn.reply(m.chat, 'Terjadi error', m)
    }
}

handler.command = /^(nhentai|nhpdf)$/i
handler.tags = ['nsfw']
handler.help = ['nhentai <code> ']
handler.register = true;

export default handler 
