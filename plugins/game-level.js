import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level mu: *${user.level}*
Kurang: *${max - user.exp}* lagi.
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${conn.getName(m.sender)} naik level!`
        let str = `
${teks} 
Levelup! *${user.level}*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendHydrated(m.chat, `「  ${str} 」` , me, img, `http://github.com/Rlxfly`, '𝙂𝙞𝙩𝙝𝙪𝙗', '', '', [

      ['inv', '.a'],

      [null],

      [null, null]

    ], null,  { asLocation: true })
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^(levelup)$/i

handler.register = true;

export default handler