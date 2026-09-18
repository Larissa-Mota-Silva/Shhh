const heartButton = document.getElementById("heartButton");
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const cursor = document.getElementById("cursor");
const again = document.getElementById("again");

const lines = [
  
  { text: "Eu amo o jeito que você fala comigo,", className: "" },
  { text: "e o jeito que você consegue me fazer rir.", className: "" },
  { text: "Amo nossas conversas sem sentido", className: "" },
  { text: "e as que fazem a gente perder a noção do tempo.", className: "" },

  { text: "Amo suas manias,", className: "" },
  { text: "até aquelas que provavelmente", className: "" },
  { text: "você nem percebe que tem.", className: "" },
  { text: "Amo odiar quando você tenta me irritar", className: "" },
  { text: "e fica satisfeito por conseguir tão facilmente.", className: "" },

  { text: "Amo nossas pequenas implicâncias,", className: "" },
  { text: "as brincadeiras bobas", className: "" },
  { text: "e esse nosso jeito estranho", className: "" },
  { text: "de demonstrar carinho.", className: "" },

  { text: "Amo quando você está certo.", className: "" },
  { text: "E amo ainda mais quando você está errado", className: "" },
  { text: "e eu tenho a oportunidade", className: "" },
  { text: "de te lembrar disso.", className: "" },

  { text: "Amo quando você me faz rir", className: "" },
  { text: "até nos dias em que eu não estava com vontade.", className: "" },
  { text: "Amo quando você me abraça", className: "" },
  { text: "e, por alguns segundos,", className: "" },
  { text: "parece que o resto pode esperar.", className: "" },

  { text: "Amo nossas estranhices,", className: "" },
  { text: "nossos planos,", className: "" },
  { text: "as coisas que a gente ainda quer viver", className: "" },
  { text: "e até aquelas que a gente inventa", className: "" },
  { text: "sem saber se um dia vão acontecer.", className: "" },

  { text: "Amo estar perto de você.", className: "" },
  { text: "E odeio quando preciso ir embora.", className: "" },

  { text: "Amo a pessoa que você é comigo,", className: "" },
  { text: "mas amo também a pessoa que você é", className: "" },
  { text: "quando ninguém está olhando.", className: "" },

  { text: "E talvez eu pudesse continuar", className: "" },
  { text: "fazendo uma lista enorme", className: "" },
  { text: "de tudo que amo em você.", className: "" },

  { text: "Mas, no fim,", className: "" },
  { text: "todas essas coisas me levam", className: "" },
  { text: "para o mesmo lugar.", className: "" },

  { text: "Porque eu não amo apenas", className: "" },
  { text: "o jeito que você fala,", className: "" },
  { text: "o jeito que você ri,", className: "" },
  { text: "as suas manias", className: "" },
  { text: "ou as nossas brincadeiras.", className: "" },

  { text: "Eu amo você.", className: "big" },

  { text: "E acho que essa é justamente", className: "" },
  { text: "a única coisa sobre você", className: "" },
  { text: "que eu nunca vou conseguir", className: "" },
  { text: "explicar direito.", className: "" },

  { text: "Mas posso tentar,", className: "" },
  { text: "estando com você", className: "" },
  { text: "pelo resto das nossas vidas. ❤️", className: "big" }
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

  lines.forEach((line, index) => {
    const span = document.createElement("span");

    span.className = `line ${line.className}`;
    span.textContent = line.text;

    // Cada verso aparece depois do anterior
    span.style.animationDelay = `${index * 0.75}s`;

    message.appendChild(span);
  });

  const totalTime = lines.length * 750 + 900;

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
