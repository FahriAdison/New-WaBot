import util from 'util';
import path from 'path';
import fetch from 'node-fetch';

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

async function handler(m, {
    groupMetadata,
    command,
    conn,
    text,
    usedPrefix
}) {
    if (!text) {
        throw new Error(`Contoh:\n${usedPrefix + command} pengcoli`);
    }

    let ps = groupMetadata.participants.map(v => v.id);
    let randomParticipants = Array.from({
        length: 10
    }, () => ps.getRandom());
    let x = pickRandom(['😨', '😅', '😂', '😳', '😎', '🥵', '😱', '🐦', '🙄', '🐤', '🗿', '🐦', '🤨', '🥴', '😐', '👆', '😔', '👀', '👎']);
    let res = await fetch('https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita.json');
    let json = await res.json();
    let vn = pickRandom(json);

    let top = `*${x} Top 10 ${text} ${x}*\n\n` + randomParticipants.map((id, index) => `${index + 1}. ${user(id)}`).join('\n');

    m.reply(top, null, {
        contextInfo: {
            mentionedJid: randomParticipants
        }
    });

    conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    });
}

function user(id) {
    return '@' + id.split('@')[0];
}

handler.help = handler.command = ['top'];
handler.tags = ['fun'];
handler.group = true;
handler.register = true;

export default handler;