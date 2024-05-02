import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async (m) => {
global.Ina = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text='
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let sn = createHash('md5').update(m.sender).digest('hex')
    conn.reply(m.chat, sn, m)
}
handler.help = ['sn']
handler.tags = ['xp']
handler.command = /^(sn)$/i
handler.register = true
export default handler