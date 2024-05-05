import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, `• *Example :* .tiktok https://vm.tiktok.com/xxxxxxxxxxxxxx`, m);
  }
  if (!text.match(/tiktok/gi)) {
    return conn.reply(m.chat, 'Make sure the link is from TikTok', m);
  }
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    let p = await Tiktok(`${text}`);
    await conn.sendFile(m.chat, p.nowm, 'tiktok.mp4', p.title, m);
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
  } catch (e) {
    console.error(e);
  }
};

handler.help = ['tiktok <url>']
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i;
handler.limit = false;
handler.group = false;
handler.register = true;

export default handler;

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function Tiktok(url) {
  let response = await axios.post("https://lovetik.com/api/ajax/search", new URLSearchParams(Object.entries({ query: url })));

  let result = {};
  result.creator = "Jhnspntx";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener((response.data.links[0].a || "").replace("https", "http"));
  result.watermark = await shortener((response.data.links[1].a || "").replace("https", "http"));
  result.audio = await shortener((response.data.links[2].a || "").replace("https", "http"));
  result.thumbnail = await shortener(response.data.cover);
  return result;
}
