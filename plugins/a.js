import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        conn.reply(m.chat, 'Karakternya mana?', m);
        return;
    }

    let characterName = text.toLowerCase().trim().replace(/ /g, '-');
    let apiUrl = `https://api.ennead.cc/buruaka/character/${characterName}`;
    let response = await fetch(apiUrl);
    let responseData = await response.json();

    if (!responseData || !responseData.data || responseData.data.length === 0) {
        conn.reply(m.chat, 'Karakter tidak ditemukan.', m);
        return;
    }

    let foundCharacter = responseData.data.find(character => character.name.toLowerCase() === characterName);

    if (!foundCharacter) {
        conn.reply(m.chat, 'Karakter tidak ditemukan.', m);
        return;
    }

    let message = `
        *Name:* ${foundCharacter.name}
        *Profile:* ${foundCharacter.profile}
        *Position:* ${foundCharacter.position}
        *Role:* ${foundCharacter.role}
        *Armor Type:* ${foundCharacter.armorType}
        *Bullet Type:* ${foundCharacter.bulletType}
        *Weapon Type:* ${foundCharacter.weaponType}
        *Squad Type:* ${foundCharacter.squadType}
    `;

    conn.reply(m.chat, message, m);
}

handler.help = ['bluearchive'];
handler.tags = ['bluearchive'];
handler.command = /^(bluearchive)$/i;

handler.register = true

export default handler;