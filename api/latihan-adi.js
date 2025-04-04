import fetch from 'node-fetch';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  const response = await fetch('https://adi.gov.my/');
  const html = await response.text();
  const $ = cheerio.load(html);

  const kursus = [];
  $('a').each((i, el) => {
    const text = $(el).text();
    const href = $(el).attr('href');
    if (text.toLowerCase().includes('kursus')) {
      kursus.push({ title: text.trim(), link: href });
    }
  });

  res.status(200).json({ kursus });
}
