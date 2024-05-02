import fetch from 'node-fetch';
import ytdl from 'ytdl-core';
import fg from 'api-dylux';
import { youtubedl, youtubedlv2, youtubeSearch } from '@bochilteam/scraper';

let limit = 80;

const handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `Example:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
    if (!args[0].match(/youtu/gi)) throw `Verify that the YouTube link`;

    let q = args[1] || "480p";
    let v = args[0];
    await conn.reply(m.chat, wait, m);

    try {
        let item = await ytmp4(args[0], q.split("p")[0]);
        if (parseFloat(item.contentLength) >= limit) {
            return m.reply(`乂 Youtube Downloader\n\nSize: ${item.contentLength}\nQuality: ${item.quality}\nThe file exceeds the download limit +${limit} MB\n\nLink:\n${await shortUrl(item.videoUrl)}`);
        }

        let captvid = `乂 Youtube Downloader
        
Image URL: ${item.thumb.url || 'Tidak diketahui'}
Title: ${item.title || 'Tidak diketahui'}
Date: ${item.date || 'Tidak diketahui'}
Duration: ${item.duration || 'Tidak diketahui'}
Channel: ${item.channel || 'Tidak diketahui'}
Quality: ${item.quality || 'Tidak diketahui'}
Content Length: ${item.contentLength || 'Tidak diketahui'}
Description: ${item.description || 'Tidak diketahui'}
`.trim();

        let dls = "Downloading video success";
        let doc = {
            video: {
                url: item.videoUrl
            },
            mimetype: "video/mp4",
            caption: captvid,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: v,
                    title: item.title,
                    body: dls,
                    sourceUrl: v,
                    thumbnail: await (await conn.getFile(item.image)).data
                }
            }
        };

        await conn.sendMessage(m.chat, doc, {
            quoted: m
        });
    } catch {
        try {
            const yt = await youtubedl(v).catch(async () => await youtubedlv2(v));
            const dl_url = await yt.video[q].download();
            const title = await yt.title;
            const size = await yt.video[q].fileSizeH;

            if (parseFloat(size) >= limit) {
                return m.reply(`乂 Youtube Downloader\n\nSize: ${size}\nQuality: ${q}\nThe file exceeds the download limit +${limit} MB\n\nLink:\n${await shortUrl(dl_url)}`);
            }

            let captvid = `乂 Youtube Downloader
            
Title: ${title || 'Tidak diketahui'}
Ext: mp4
Quality: ${q || 'Tidak diketahui'}
Size: ${size || 'Tidak diketahui'}
`.trim();

            let dls = "Downloading video success";
            let doc = {
                video: {
                    url: dl_url
                },
                mimetype: "video/mp4",
                caption: captvid,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        mediaType: 2,
                        mediaUrl: v,
                        title: title,
                        body: dls,
                        sourceUrl: v,
                        thumbnail: await (await conn.getFile(yt.thumbnail)).data
                    }
                }
            };

            await conn.sendMessage(m.chat, doc, {
                quoted: m
            });
        } catch (e) {
            try {
                const {
                    title,
                    result,
                    quality,
                    size,
                    duration,
                    thumb,
                    channel
                } = await fg.ytv(args[0]);

                if (parseFloat(size) >= limit) {
                    return m.reply(`乂 Youtube Downloader\n\nSize: ${size}\nQuality: ${quality}\nThe file exceeds the download limit +${limit} MB\n\nLink:\n${await shortUrl(result)}`);
                }

                let captvid = `乂 Youtube Downloader
                
Title: ${title || 'Tidak diketahui'}
Ext: mp4
Quality: ${quality || 'Tidak diketahui'}
Size: ${size || 'Tidak diketahui'}
Duration: ${duration || 'Tidak diketahui'}
`.trim();

                let dls = "Downloading video success";
                let doc = {
                    video: {
                        url: result
                    },
                    mimetype: "video/mp4",
                    caption: captvid,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            mediaType: 2,
                            mediaUrl: v,
                            title: title,
                            body: dls,
                            sourceUrl: v,
                            thumbnail: await (await conn.getFile(thumb)).data
                        }
                    }
                };

                await conn.sendMessage(m.chat, doc, {
                    quoted: m
                });
            } catch (e) {
                await m.reply(error);
            }
        }
    }
}

handler.help = ["mp4", "v", ""].map(v => "yt" + v + ` <url> <without message>`);
handler.tags = ["downloader"];
handler.command = /^y(outube(mp4|vdl)|t((mp4|v)|vdl))$/i;
handler.exp = 0;
handler.register = false;
handler.limit = true;
handler.register = true

export default handler;

async function shortUrl(url) {
    let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
    return await res.text();
}

function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedDuration = [];

    if (hours > 0) {
        formattedDuration.push(`${hours} hour`);
    }

    if (minutes > 0) {
        formattedDuration.push(`${minutes} minute`);
    }

    if (remainingSeconds > 0) {
        formattedDuration.push(`${remainingSeconds} second`);
    }

    return formattedDuration.join(' ');
}

function formatBytes(bytes) {
    if (bytes === 0) {
        return '0 B';
    }
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function ytmp4(query, quality = 134) {
    try {
        const videoInfo = await ytdl.getInfo(query, {
            lang: 'id'
        });
        const format = ytdl.chooseFormat(videoInfo.formats, {
            format: quality,
            filter: 'videoandaudio'
        });
        let response = await fetch(format.url, {
            method: 'HEAD'
        });
        let contentLength = response.headers.get('content-length');
        let fileSizeInBytes = parseInt(contentLength);
        return {
            title: videoInfo.videoDetails.title,
            thumb: videoInfo.videoDetails.thumbnails.slice(-1)[0],
            date: videoInfo.videoDetails.publishDate,
            duration: formatDuration(videoInfo.videoDetails.lengthSeconds),
            channel: videoInfo.videoDetails.ownerChannelName,
            quality: format.qualityLabel,
            contentLength: formatBytes(fileSizeInBytes),
            description: videoInfo.videoDetails.description,
            videoUrl: format.url
        };
    } catch (error) {
        throw error;
    }
}
