import fetch from 'node-fetch';

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Nama Manga!\nContoh: #manga One Piece`;
  try {
    let params = {
      q: `"${text}"` // Menambahkan tanda kutip untuk pencarian teks
    };

    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    let res = await fetch(`https://api.jikan.moe/v4/manga?${queryString}`);
    if (!res.ok) throw await res.text();
    let json = await res.json();
    let { title, synopsis, type, score, chapters, volumes, rank, popularity, members, favorites, url, images } = json.data[0];

    // Mengambil URL gambar manga
    let imageUrl = images.jpg.image_url;

    let mangaInfo = `[ *MANGA INFO* ]
🔑 *Title:* ${title}
📖 *Synopsis:* ${synopsis}
📚 *Type:* ${type}
⭐ *Score:* ${score}
📚 *Chapters:* ${chapters}
📚 *Volumes:* ${volumes}
🏅 *Rank:* ${rank}
🔥 *Popularity:* ${popularity}
👥 *Members:* ${members}
❤️ *Favorites:* ${favorites}
🔗 *Link:* ${url}`;

    // Kirim informasi manga beserta gambar manga
    await conn.sendFile(m.chat, imageUrl, 'manga.jpg', mangaInfo, m);
  } catch {
    m.reply('Tidak Ditemukan... :(\nMungkin Coba kata kunci lain?');
  }
};

handler.help = ['manga <nama>'];
handler.tags = ['anime'];
handler.limit = true;
handler.command = /^(manga)$/i;

export default handler;