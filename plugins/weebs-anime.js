import {
    getInfoFromName
} from "mal-scraper";
import fetch from 'node-fetch'

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    if (!text) throw "input text"
    try {
        await m.reply(wait)
        const {
            title,
            synopsis,
            premiered,
            broadcast,
            genres,
            englishTitle,
            japaneseTitle,
            type,
            episodes,
            rating,
            aired,
            score,
            favorites,
            ranked,
            duration,
            studios,
            popularity,
            members,
            scoreStats,
            source,
            synonyms,
            status,
            id,
            picture
        } = await getInfoFromName(text);
        let sym = "  ○"
        const Desc = `      *[ My Anime List ]*

${sym} *Title:* ${title}
${sym} *English Title:* ${englishTitle}
${sym} *Japanese Title:* ${japaneseTitle}

${sym} *Premiered:* ${premiered}
${sym} *Broadcast:* ${broadcast}
${sym} *Genres:* ${genres}
${sym} *Type:* ${type}
${sym} *Episodes:* ${episodes}
${sym} *Rating:* ${rating}
${sym} *Aired:* ${aired}
${sym} *Score:* ${score}
${sym} *Favorite:* ${favorites}
${sym} *Ranked:* ${ranked}
${sym} *Duration:* ${duration}
${sym} *Studios:* ${studios}
${sym} *Popularity:* ${popularity}
${sym} *Members:* ${members}
${sym} *Score Stats:* ${scoreStats}
${sym} *Source:* ${source}
${sym} *Synonyms:* ${synonyms}
${sym} *Status:* ${status}
${sym} *Identifier:* ${id}
${sym} *Link:* ${id}

${sym} *Sinopsis:* ${synopsis}`;
        await  conn.sendMessageModify(m.chat, Desc, m, {
title: me,
ads: true, 
largeThumb: true,
thumbnail: await(await fetch(picture)).buffer()
})
    } catch (e) {
        throw eror
    }
}
handler.help = ["myanimelist <query>"]
handler.tags = ["weebs"]
handler.command = /^(myanimelist)$/i
handler.register = true

export default handler