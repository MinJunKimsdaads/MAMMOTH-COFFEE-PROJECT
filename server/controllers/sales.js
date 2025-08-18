import * as cheerio from "cheerio";
import iconv from "iconv-lite";

export const getSalesData = async (req, res) => {
  try {
    const code = req.query.code || null;
    if(!code) res.status(500).json({ error: "empty code" });   
    const data = {};

    const response = await fetch(
        `https://finance.naver.com/item/main.naver?code=${code}`
    );
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const html = iconv.decode(buffer, "EUC-KR");

    const $ = cheerio.load(html);

    $(".cop_analysis .sub_section tbody").each((_, el)=>{
        const trs = $(el).find("tr");
        const lastSales = $(trs[0]).find('.last').text().replace(/\s+/g, "") ?? 0;
        const lastProfit = $(trs[1]).find('.last').text().replace(/\s+/g, "") ?? 0;

        // data.push({ lastSales, lastProfit});
        data['lastSales'] = lastSales;
        data['lastProfit'] = lastProfit;
    })
    // API 응답
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch KOSPI 200 data" });
  }
};