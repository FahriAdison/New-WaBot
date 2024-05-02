// import db from '../lib/database.js'
const xpperlimit = 350
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buylimit/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) throw `hanya angka!\n\ncontoh: .buylimit5`
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} Money\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `Uang Kamu tidak mencukupi untuk membeli ${count} limit`, m)
}
handler.help = ['buylimit'].map(v => v + ' <total>')
handler.tags = ['xp']
handler.command = /^buylimit([0-9]+)|buylimit|buylimitall$/i
handler.owner = false

handler.register = true;

export default handler