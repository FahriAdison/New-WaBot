import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
  try {
 if (!text) {
    throw `Contoh:\n${usedPrefix + command} boobs`;
  }
  let search = await fetch(global.API('marin', '/api/search/xnxxsearch', {
    query: text
  }, 'apikey'))

  const hasil = await search.json();
  
  let teks = `*XNXX RESULTS* \n\n🔍 *KEYWORDS* *${text}*\n\n`;
  let no = 1;
  
  for (let i of hasil.result) {
    teks += `*No* : ${no++}\n*Title* : ${i.title}\n${i.desc}\n*URL* ${i.link}\n\n─────────────────\n\n`;
  }
  
  await m.reply(wait)
  await conn.sendMessage(m.chat, { image: { url: hasil.result[0].image }, caption: teks }, { quoted: m });
  } catch {
m.reply(error)
}
}
handler.help = ['xnxxsearch']
handler.tags = ['searching']
handler.command = /^(xnxxsearch|xs)$/i

handler.premium = true;
handler.private = true

export default handler