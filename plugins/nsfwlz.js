import fetxh from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  
  let res = await fetch(`https://fantox-apis.vercel.app/${command}`);
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.url) throw 'Error';
  conn.sendFile(m.chat, json.url, 'img.jpg', `result image: ${command}`, m);
};

handler.help = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'pantypull', 'headdress', 'headphone', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'vampire', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'breast', 'twintail', 'spreadpussy', 'seethrough', 'breasthold', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'nipples', 'erectnipples', 'greenhair', 'wolfgirl', 'catgirl'].map(v => v + ' */none*')
handler.command = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'pantypull', 'headdress', 'headphone', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'vampire', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'breast', 'twintail', 'spreadpussy', 'seethrough', 'breasthold', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'nipples', 'erectnipples', 'greenhair', 'wolfgirl', 'catgirl']
handler.tags = ['nsfw']
handler.limit = true
handler.register = true;

export default handler