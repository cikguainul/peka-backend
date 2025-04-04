export default function handler(req, res) {
  const biasiswa = [
    { nama: "Biasiswa Yayasan Khazanah", pautan: "https://www.yayasankhazanah.com.my" },
    { nama: "Biasiswa MARA", pautan: "https://www.mara.gov.my" },
    { nama: "YTP – Yayasan Telekom", pautan: "https://ytp.tm.com.my" },
  ];
  res.status(200).json({ biasiswa });
}
