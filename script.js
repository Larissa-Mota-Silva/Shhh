const heartButton = document.getElementById("heartButton");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const cursor = document.getElementById("cursor");
const again = document.getElementById("again");

const lines = [
  {
    text: `Eu amo o jeito que você fala comigo,
e o jeito que você consegue me fazer rir.
Amo nossas conversas sem sentido
e as que fazem a gente perder a noção do tempo.`,
    className: ""
  },

  {
    text: `Amo suas manias,
até aquelas que provavelmente
você nem percebe que tem.
Amo odiar quando você tenta me irritar
e fica satisfeito por conseguir tão facilmente.`,
    className: ""
  },

  {
    text: `Amo nossas pequenas implicâncias,
as brincadeiras bobas
e esse nosso jeito estranho
de demonstrar carinho.`,
    className: ""
  },

  {
    text: `Amo quando você está certo.
E amo ainda mais quando você está errado
e eu tenho a oportunidade
de te lembrar disso.`,
    className: ""
  },

  {
    text: `Amo quando você me faz rir
até nos dias em que eu não estava com vontade.
Amo quando você me abraça
e, por alguns segundos,
parece que o resto pode esperar.`,
    className: ""
  },

  {
    text: `Amo nossas estranhices,
nossos planos,
as coisas que a gente ainda quer viver
e até aquelas que a gente inventa
sem saber se um dia vão acontecer.`,
    className: ""
  },

  {
    text: `Amo estar perto de você.
E odeio quando preciso ir embora.`,
    className: ""
  },

  {
    text: `Amo a pessoa que você é comigo,
mas amo também a pessoa que você é
quando ninguém está olhando.`,
    className: ""
  },

  {
    text: `E talvez eu pudesse continuar
fazendo uma lista enorme
de tudo que amo em você.

Mas, no fim,
todas essas coisas me levam
para o mesmo lugar.`,
    className: ""
  },

  {
    text: `Porque eu não amo apenas
o jeito que você fala,
o jeito que você ri,
as suas manias
ou as nossas brincadeiras.`,
    className: ""
  },

  {
    text: `Eu amo você.`,
    className: "big"
  },

  {
    text: `E acho que essa é justamente
a única coisa sobre você
que eu nunca vou conseguir
explicar direito.`,
    className: ""
  },

  {
    text: `Mas posso tentar,
estando com você pelo resto de nossas vidas.`,
    className: "big"
  }
];

let opened = false;

function createParticles() {
  const symbols = ["♥", "♡", "❤", "✦", "✧", "•"];

  for (let i = 0; i < 28; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 190;

    particle.style.left = "50%";
    particle.style.top = "50%";
    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    particle.style.animationDelay = `${Math.random() * .15}s`;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1200);
  }
}

function showMessage() {
  message.innerHTML = "";
  cursor.classList.remove("hidden");
  again.classList.add("hidden");

  const STANZA_DELAY = 3500; // tempo entre cada estrofe

lines.forEach((line, index) => {
  const span = document.createElement("span");

  span.className = `line ${line.className}`;
  span.textContent = line.text;

  span.style.animationDelay = `${index * STANZA_DELAY}ms`;

  message.appendChild(span);

  // Faz a carta acompanhar o texto automaticamente
  setTimeout(() => {
    span.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, index * STANZA_DELAY + 500);
});

const totalTime = lines.length * STANZA_DELAY + 1500;

setTimeout(() => {
  cursor.classList.add("hidden");
  again.classList.remove("hidden");
}, totalTime);

  setTimeout(() => {
    cursor.classList.add("hidden");
    again.classList.remove("hidden");
  }, totalTime);
}

heartButton.addEventListener("click", () => {
  if (opened) return;

  opened = true;

  intro.classList.add("exploding");
  createParticles();

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transform = "scale(.7)";

    setTimeout(() => {
      intro.classList.add("hidden");
      letter.classList.remove("hidden");
      showMessage();
    }, 500);

  }, 500);
});

again.addEventListener("click", () => {
  showMessage();
});
