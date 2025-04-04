export default function handler(req, res) {
  const info = [
    { tajuk: "Daftar Kad OKU", pautan: "https://www.jkm.gov.my/jkm/index.php?r=portal/left&id=U3h2YzN0bWxzK0ZsNWhRQ2JHRW1jZz09" },
    { tajuk: "Elaun & Insentif OKU", pautan: "https://www.jkm.gov.my/jkm/index.php?r=portal/left&id=QzZ4UW5RVGJ6TXJ0Yy9CR1dCWmVPUT09" },
    { tajuk: "Hak OKU – Akta 685", pautan: "https://www.kpwkm.gov.my/kpwkm/uploads/files/Akta%20OKU/Akta%20685.pdf" },
  ];
  res.status(200).json({ info });
}
