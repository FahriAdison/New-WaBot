import { jadwalTV } from '@bochilteam/scraper';

let handler = async (m, { conn, text, usedPrefix: _p }) => {
    if (!text) throw 'Input Chanel TV Name!';

    let res = await jadwalTV(text);
    let txt = res.result.map((v) => `「${v.date.replace('WIB', ' WIB')}」➦  ${v.event}`).join('\n');
    let ch = `\n\t\t 「📺」 Jadwal TV ${res.channel}\t\t\n`;

    conn.reply(m.chat, ch + txt, m);
};

handler.alias = ['jtv', 'jadwaltv'];
handler.command = /^(jtv|jadwaltv)$/i;
handler.register = true;

export default handler;
