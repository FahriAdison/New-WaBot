const {
    BingImageCreator
} = await (await import('../lib/bing-image.js'));
import fetch from 'node-fetch';

const handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text;

    if (args.length >= 1) {
        text = args.join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        throw 'Input teks atau reply teks!';
    }

    await m.reply(wait);

    try {
        const res = new BingImageCreator({
            cookie: "1C-k_4JiXEAt_V-jpEJFkOYMDXVkzPuzH-xRminmulnHrfWEivRKtX9wsEWwWe_WcO8qtX4gR2RVrcvkvX5q3CnhBa3LmBrPRDAo25VzUvrwBrMp9cAuEU86uzrOKpwfpqR92PndHglCOPiv_BBm_0v72KC7jqD1VR9XDDqKNE-Eph-QrqN0hw5h88lz654xjE5XzFHtV4PsahiDnRwNkaw"
        });
        const data = await res.createImage(text);

        const filteredData = data.filter(file => !file.endsWith('.svg'));
        const totalCount = filteredData.length;

        if (totalCount > 0) {
            for (let i = 0; i < totalCount; i++) {
                try {
                    await conn.sendFile(
                        m.chat,
                        filteredData[i],
                        '',
                        `Image *(${i + 1}/${totalCount})*`,
                        m,
                        false, {
                            mentions: [m.sender],
                        }
                    );
                } catch (error) {
                    console.error(`Error sending file: ${error.message}`);
                    await m.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
                }
            }
        } else {
            await m.reply('No images found after filtering.');
        }
    } catch (error) {
        try {
            const data = await AemtBingImg(text);
            try {
                await conn.sendFile(
                    m.chat,
                    data.result,
                    '',
                    `Image`,
                    m,
                    false, {
                        mentions: [m.sender],
                    }
                );
            } catch (error) {
                console.error(`Error sending file: ${error.message}`);
                await m.reply(`Failed to send image`);
            }
        } catch (error) {
            console.error(`Error in handler: ${error.message}`);
            await m.reply('An error occurred while processing the request.');
        }
    }
};

handler.help = ["bingimg *[query]*"];
handler.tags = ["ai"];
handler.command = /^(bingimg)$/i;

handler.limit = true
handler.register = true

export default handler;

async function AemtBingImg(query) {
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    };

    const bardRes = await fetch(`https://aemt.me/bingimg?text=${query}`, {
        method: "get",
        headers
    });
    const bardText = await bardRes.json();
    return bardText;
};