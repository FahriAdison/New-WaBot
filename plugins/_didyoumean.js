import didyoumean from 'didyoumean'
import similarity from 'similarity'
import fetch from 'node-fetch'

export async function before(m, {
    match,
    usedPrefix
}) {
    if ((usedPrefix = (match[0] || '')[0])) {
        let noPrefix = m.text.replace(usedPrefix, '')
        let args = noPrefix.trim().split` `.slice(1)
        let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (help.includes(noPrefix)) return
        let mean = didyoumean(noPrefix, help)
        if (!mean) return
        let sim = similarity(noPrefix, mean)
        if (sim === 1 || mean.toLowerCase() === noPrefix.toLowerCase()) return
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
        let name = await this.getName(who)
        let emoji = '🤔'
        if (sim >= 0.75) {
            emoji = '😄'
        } else if (sim >= 0.5) {
            emoji = '😅'
        }
        let caption = `Are you looking for the following ${mean}? 

 ◦ Name Command: *${usedPrefix + mean}*
 ◦ Results of Similarities: *${Number(sim * 100).toFixed(2)}%* ${emoji}`
        await this.sendMessageModify(m.chat, caption, m, {
title: me,
ads: true, 
largeThumb: true,
thumbnail: await(await fetch(marin)).buffer()
})
    }
}

export const disabled = false