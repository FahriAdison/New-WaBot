let handler = async (m, { conn, args }) => {
  if (args.length === 2 && args[0] === 'all') {
    let users = global.db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      throw 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit all 100';
    }
    for (let user in users) {
      users[user].limit += pointsToAdd;
    }
    conn.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} limit untuk semua pengguna.`, m);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
      throw 'Tag pengguna yang ingin diberikan limit. Contoh: .addlimir @user 100';
    }
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      throw 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit @user 100';
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
        exp: 0,
        lastclaim: 0,
      };
    }

    users[mentionedJid].limit += pointsToAdd;

    conn.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
      mentions: [mentionedJid]
    });
  } else {
    throw 'Masukkan argumen yang valid. Contoh: .addlimit @user 100 atau .addlimit all 100';
  }
};

handler.help = ['addlimit @user <jumlah>', 'addlimit all <jumlah>'];
handler.tags = ['xp'];
handler.command = /^(addlimit)$/i;
handler.owner = true

export default handler
