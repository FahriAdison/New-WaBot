import fetch from 'node-fetch';

let handler = async(m, { conn }) => {
  try {
    let res = await fetch(`https://api.jikan.moe/v4/random/anime`);
    if (!res.ok) throw new Error(`Gagal mengambil anime random: ${res.statusText}`);
    let json = await res.json();

    let animeInfo = `[ *ANIME RANDOM* ]`;
    animeInfo += `\n- *Judul:* ${json.data.title}`;
    animeInfo += `\n- *Judul Inggris:* ${json.data.title_english}`;
    animeInfo += `\n- *Judul Jepang:* ${json.data.title_japanese}`;
    animeInfo += `\n- *Judul Sinonim:* ${json.data.title_synonyms.join(', ')}`;
    animeInfo += `\n- *Tipe:* ${json.data.type}`;
    animeInfo += `\n- *Sumber:* ${json.data.source}`;
    animeInfo += `\n- *Jumlah Episode:* ${json.data.episodes}`;
    animeInfo += `\n- *Status:* ${json.data.status}`;
    animeInfo += `\n- *Durasi:* ${json.data.duration}`;
    animeInfo += `\n- *Rating:* ${json.data.rating}`;
    animeInfo += `\n- *Skor:* ${json.data.score}`;
    animeInfo += `\n- *Skor oleh:* ${json.data.scored_by}`;
    animeInfo += `\n- *Peringkat:* ${json.data.rank}`;
    animeInfo += `\n- *Populeritas:* ${json.data.popularity}`;
    animeInfo += `\n- *Jumlah Member:* ${json.data.members}`;
    animeInfo += `\n- *Favorit:* ${json.data.favorites}`;
    animeInfo += `\n- *Sinopsis:* ${json.data.synopsis}`;

    // Kirim gambar anime
    const imageUrl = json.data.images.jpg.image_url;
    conn.sendFile(m.chat, imageUrl, 'anime.jpg', animeInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengambil anime random...');
  }
}

handler.help = ['randomanime'];
handler.tags = ['anime'];
handler.command = /^(randomanime)$/i;

handler.register = true

export default handler;