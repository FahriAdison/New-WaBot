import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
    try {
        const res = await fetch('https://nekos.life/api/v2/img/wallpaper');
        const data = await res.json();
        
        if (!data || !data.url) {
            throw new Error('Tidak dapat mengambil gambar wallpaper anime.');
        }
        
        await conn.sendFile(m.chat, data.url, 'wallpaper.jpg', 'Ini dia wallpaper anime yang kamu minta.', m);
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil gambar wallpaper anime.');
    }
};

handler.help = ['wallpaper'];
handler.tags = ['anime'];
handler.command = /^(wallpaper)$/i;

handler.register = true

export default handler;