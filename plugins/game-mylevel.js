import canvacord from 'canvacord'
import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn }) => {
  // img user
	let pic = await( await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
  // data user
   let user = db.data.users[m.sender]
        let users = Object.entries(db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
    let money = db.data.users[m.sender].money
   let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = xpRange(user.level, global.multiplier)
  // textnya
  let text = `======「 U S E R  I N F O 」======
  
Name : ${conn.getName(m.sender)}
Level : ${user.level}
Money : ${money}
  
Untuk menaikkan level kamu harus mendapatkan xp lebih banyak, kamu bisa mendapatkan xp dengan bermain game.`
  // canvas
    const rank = new canvacord.Rank()
      .setRank(usersLevel.indexOf(m.sender) + 1)
      .setLevel(user.level)
      .setAvatar(pic)
      .setCurrentXP(user.exp - min)
      .setRequiredXP(xp)
      .setStatus('online')
      .setProgressBar('#FFFFFF', 'COLOR')
      .setUsername(conn.getName(m.sender))
      .setBackground('IMAGE', 'https://i.ibb.co/rxWdgSL/marin.jpg')
      conn.sendFile(m.chat, await rank.build(), 'level.jpg', text, m)
}

handler.help = ['level']
handler.tags = ['xp']
handler.command = /^(level)$/i
handler.register = true;

export default handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}