import axios from "axios";
import fetch from "node-fetch";

const fetchData = async (query, page) => {
    const url = `https://lahelu.com/api/post/get-search?query=${query}&page=${page}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (axiosError) {
        console.error('Error with Axios:', axiosError);

        try {
            const fetchResponse = await fetch(url);
            return await fetchResponse.json();
        } catch (fetchError) {
            console.error('Error with Fetch:', fetchError);
            throw fetchError;
        }
    }
};

const handler = async (m, {
    conn,
    text
}) => {
    const parts = text.trim().split("|").map(item => item.trim());

    if (parts.length < 1) return conn.reply(m.chat, '📚 Contoh penggunaan: *lahelu query|page|part*', m);

    const [query, page, part] = parts;
    const pageNum = +page || 1;
    const partNum = +part || 1;

    try {
        const {
            postInfos
        } = await fetchData(query, pageNum);

        if (postInfos && postInfos.length > 0) {
            if (partNum > 0 && partNum <= postInfos.length) {
                const {
                    postID,
                    userID,
                    title,
                    totalUpvotes,
                    totalDownvotes,
                    totalComments,
                    createTime,
                    media,
                    sensitive,
                    userUsername
                } = postInfos[partNum - 1];
                const message = `
📌 *Post ID:* ${postID}
👤 *User ID:* ${userID}
📜 *Title:* ${title}
👍 *Total Upvotes:* ${totalUpvotes}
👎 *Total Downvotes:* ${totalDownvotes}
💬 *Total Comments:* ${totalComments}
⏰ *Create Time:* ${new Date(createTime).toLocaleString()}
🖼️ *Media:* ${media}
🚫 *Sensitive:* ${sensitive ? 'Yes' : 'No'}
🧑‍💼 *User Username:* ${userUsername}
\n📚 Contoh penggunaan: *lahelu query|page|part*`;

                await conn.sendFile(m.chat, `https://cache.lahelu.com/${media}`, '', message, m);
            } else if (pageNum > 0) {
                const listMessage = postInfos.map((post, index) => `*${index + 1}.* ${post.title}`).join('\n');
                const helpMessage = `\n\n📚 Contoh penggunaan: *lahelu query|page|part*`;
                conn.reply(m.chat, listMessage + helpMessage, m);
            } else {
                conn.reply(m.chat, '❌ Nomor bagian tidak valid. Harap masukkan nomor bagian yang tepat.\n\n📚 Contoh penggunaan: *lahelu query|page|part*', m);
            }
        } else {
            conn.reply(m.chat, '📭 Tidak ada hasil yang ditemukan.', m);
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        conn.reply(m.chat, '❌ Terjadi kesalahan saat mengambil data. Pastikan format input benar.\n\n📚 Contoh penggunaan: *lahelu query|page|part*', m);
    }
};

handler.help = ['lahelu'].map(v => v + ' query|page|part');
handler.tags = ['internet'];
handler.command = /^(lahelu)$/i;

handler.register = true;

export default handler;