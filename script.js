
const data = [
  {
    title: "Full Stack Web Development with JavaScript (MERN)",
    desc: "6 City batch · 20 days left",
    flag: "us.png"
  },
  {
    title: "Full Stack Web Development with Python, Django & React",
    desc: "8 City batch · 40 days left",
    flag: "fr.png"
  },
  {
    title: "App Development with Flutter",
    desc: "18 City batch · 48 days left",
    flag: "jp.png"
  },
  {
    title: "Full Stack Web Development with PHP, Laravel & Vue Js",
    desc: "7 City batch · 40 days left",
    flag: "de.png"
  }
];

const container = document.getElementById('card-container');
data.forEach(item => {
  container.innerHTML += `
    <div class="card">
      <img src="images/flags/${item.flag}" alt="Flag" />
      <div class="card-content">
        <div class="card-title">${item.title}</div>
        <div class="card-desc">${item.desc}</div>
        <a class="card-btn" href="#">বিস্তারিত দেখুন →</a>
      </div>
    </div>
  `;
});
