let handler = async (m, {
    conn
}) => {
    conn.tebakanjime = conn.tebakanjime ? conn.tebakanjime : {}
    let id = m.chat
    if (!(id in conn.tebakanjime)) throw false
    let json = conn.tebakanjime[id][1]
    conn.reply(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hani$/i

handler.limit = true
handler.register = true;

export default handler