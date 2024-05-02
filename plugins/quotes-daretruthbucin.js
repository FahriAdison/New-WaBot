import {
    dare,
    truth,
    bucin
} from '@bochilteam/scraper'

let handler = async function(m, {
    conn,
    text,
    command,
    usedPrefix
}) {
    if (command == 'dare') {
        await conn.reply(m.chat, await dare(), m)
    }
    if (command == 'truth') {
        await conn.reply(m.chat, await truth(), m)
    }
    if (command == 'bucin') {
        await conn.reply(m.chat, await bucin(), m)
    }
}
handler.command = handler.help = ['dare', 'truth', 'bucin']
handler.tags = ['quotes']
handler.register = true;

export default handler