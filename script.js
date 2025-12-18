/* ---------- FLOW CONTROL ---------- */
let taps = 0;

function startCake() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("cake").style.display = "block";
  document.getElementById("tapText").style.display = "block";
}

document.body.addEventListener("click", () => {
  const cake = document.getElementById("cake");
  if (cake.style.display === "block") {
    taps++;
    cake.classList.add("cut");
    setTimeout(() => cake.classList.remove("cut"), 200);

    if (taps >= 3) {
      cake.style.display = "none";
      document.getElementById("tapText").style.display = "none";
      startCelebration();
    }
  }
});

/* ---------- TYPING ---------- */
const message = `Hey ISHA 😊

Happy Birthday 🎂✨

Just wanted to remind you —
you matter more than you know.

Your smile feels warm,
your presence feels calm,
and being you is already enough 💖

I wrote a Line.....✍️
"Mujhe toh C++ ne luta, Python mein kaha dum tha,
Meri khushi wahi doobi,
Jahan tu paas thi… aur semicolon kam tha 😅💖"

PADHLE Exam aaraha hai PADHLE 😅🙏

Enjoy this moment 🌙🎆`;

let i = 0;
const textEl = document.getElementById("text");

function typeText() {
  if (i < message.length) {
    textEl.innerHTML += message[i++];
    setTimeout(typeText, 45);
  }
}

function startCelebration() {
  document.getElementById("card").style.display = "block";
  document.getElementById("fireworks").style.display = "block";
  typeText();
}

/* ---------- FIREWORKS ---------- */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.4;
  const colors = ["#ffd166", "#ef476f", "#06d6a0", "#8ecae6", "#c77dff"];

  for (let i = 0; i < 45; i++) {
    particles.push({
      x, y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 3 + 1,
      life: 90,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

setInterval(createFirework, 1400);
animate();