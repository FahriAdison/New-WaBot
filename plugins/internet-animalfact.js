import fetch from "node-fetch";

let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    try {
        if (!text) {
            throw `
*${usedPrefix}${command} <nama hewan>*
contoh:
*${usedPrefix}${command} <dog>*\n
┌〔 Opsi 〕
├ dog
├ cat
├ panda
├ fox
├ red_panda
├ koala
├ birb
├ raccoon
├ kangaroo
├ 
└────
`.trim();
        }

        let res = await fetch(API("https://some-random-api.com", "/animal/" + text, {}));
        if (!res.ok) {
            throw `${res.status} ${res.statusText}`;
        }

        let json = await res.json();
        if (json.image) {
            await conn.sendFile(m.chat, json.image, "", `${json.fact}`, m);
        } else {
            throw json;
        }
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, `Terjadi kesalahan dalam memproses perintah.`, m);
    }
};

handler.help = ["animal"].map(v => v + ' <no>');
handler.tags = ["internet"];
handler.command = /^(animal|animalfact)$/i;
handler.register = true;

export default handler;