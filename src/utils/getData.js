import * as cheerio from "cheerio";

const getData = async (url) => {
    const res = await fetch(url);
    const resCheerio = await res.text();
    const $ = cheerio.load(resCheerio);
    return $;
}

export { getData }