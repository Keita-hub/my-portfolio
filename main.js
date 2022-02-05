const nihon = document.getElementById("nihon");
const nihonBtn = document.getElementById("nihon-button");

const shoukai = [
  "明日から西日本の全府県回ってきます！!",
  "雪溶けてきたら東日本へ！",
  "美味しいもの食べたいな",
  "車で周ります！",
];

nihonBtn.onclick = function () {
  nihon.textContent = shoukai[Math.floor(Math.random() * shoukai.length)];
};
