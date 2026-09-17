const heartButton = document.getElementById("heartButton");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const cursor = document.getElementById("cursor");
const again = document.getElementById("again");
const closeLetter = document.getElementById("closeLetter");
const scene = document.getElementById("scene");

const lines = [
  { text: "Oi, Momo! 💗", className: "big" },
  { text: "Sim, você mesmo. 👀", className: "" },
  { text: "Eu fiz isso só para te lembrar de uma coisinha...", className: "" },
  { text: "eu te amo MUITO. ❤️", className: "" },
  { text: "Mais do que essas palavrinhas conseguem explicar. 🥹💕", className: "" },
  { text: "Obrigada por ser você e por fazer parte da minha vida.", className: "" },
  { text: "Espero que você nunca esqueça o quanto é especial para mim. ✨", className: "" },
  { text: "Com amor, sempre. 💌", className: "big" }
];

let opened = false;

function createParticles() {
  const symbols = ["♥", "♡", "❤", "✦", "✧", "•"];

  for (let i = 0; i < 32; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * 210;

    particle.style.left = "50%";
    particle.style.top = "50%";
    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    particle.style.animationDelay = `${Math.random() * .12}s`;

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1200);
  }
}

function showMessage() {
  message.innerHTML = "";
  cursor.classList.remove("hidden");
  again.classList.add("hidden");

  lines.forEach((line, index) => {
    const span = document.createElement("span");
    span.className = `line ${line.className}`;
    span.textContent = line.text;
    span.style.animationDelay = `${index * 0.75}s`;
    message.appendChild(span);
  });

  const totalTime = lines.length * 750 + 900;

  setTimeout(() => {
    cursor.classList.add("hidden");
    again.classList.remove("hidden");
  }, totalTime);
}

function enterHeart() {
  if (opened) return;
  opened = true;

  intro.classList.add("exploding");
  scene.classList.add("entering");
  createParticles();

  // Primeiro o coração abre. Depois a "câmera" entra pela abertura.
  setTimeout(() => {
    scene.classList.add("zooming");
  }, 500);

  setTimeout(() => {
    intro.classList.add("hidden");
    scene.classList.remove("zooming");
    letter.classList.remove("hidden");

    requestAnimationFrame(() => {
      letter.classList.add("show");
      showMessage();
    });
  }, 1200);
}

heartButton.addEventListener("click", enterHeart);

again.addEventListener("click", showMessage);

closeLetter.addEventListener("click", () => {
  letter.classList.add("closing");

  setTimeout(() => {
    letter.classList.add("hidden");
    letter.classList.remove("closing", "show");

    scene.classList.remove("entering");
    intro.classList.remove("hidden", "exploding");

    intro.style.opacity = "0";
    intro.style.transform = "scale(.7)";

    requestAnimationFrame(() => {
      intro.style.opacity = "1";
      intro.style.transform = "scale(1)";
      opened = false;
    });
  }, 550);
});
