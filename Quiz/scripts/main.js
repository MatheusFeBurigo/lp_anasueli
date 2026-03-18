// ============ DATA ============
const QUESTIONS = [
  {
    id: 1,
    text: "Quando você acorda de manhã, qual é o primeiro pensamento que aparece?",
    options: [
      { text: "A lista de tudo que preciso fazer pelos outros", tags: ["sustentadora", "responsabilidade"] },
      { text: "Mais um dia igual ao anterior…", tags: ["longa_relacao", "pos_ruptura"] },
      { text: "Queria ter mais energia pra mim", tags: ["sustentadora", "pos_ruptura"] },
      { text: "Não sei bem o que sinto, só levanto e vou", tags: ["responsabilidade", "longa_relacao"] }
    ]
  },
  {
    id: 2,
    text: "Se alguém te perguntasse \"quem é você, além dos seus papéis?\", o que sentiria?",
    options: [
      { text: "Um vazio. Faz tempo que não penso nisso", tags: ["longa_relacao", "longa_relacao"] },
      { text: "Culpa. Como se não tivesse direito de pensar em mim", tags: ["sustentadora", "sustentadora"] },
      { text: "Confusão. Não sei mais quem sou depois de tudo que mudou", tags: ["pos_ruptura", "pos_ruptura"] },
      { text: "Angústia. Sei que deveria saber, mas não consigo responder", tags: ["responsabilidade", "responsabilidade"] }
    ]
  },
  {
    id: 3,
    text: "Qual frase mais se parece com algo que você diria?",
    options: [
      { text: "\"Eu seguro tudo, mas ninguém percebe o quanto isso pesa\"", tags: ["sustentadora", "sustentadora"] },
      { text: "\"Minha vida funciona, mas eu não me sinto vivendo\"", tags: ["longa_relacao", "responsabilidade"] },
      { text: "\"Depois que tudo mudou, eu não sei mais onde me encaixo\"", tags: ["pos_ruptura", "pos_ruptura"] },
      { text: "\"Faço tudo certo e mesmo assim sinto que falta algo\"", tags: ["responsabilidade", "longa_relacao"] }
    ]
  },
  {
    id: 4,
    text: "O que mais te incomoda hoje na sua rotina?",
    options: [
      { text: "Nunca sobra tempo, energia ou espaço para mim", tags: ["sustentadora", "responsabilidade"] },
      { text: "A repetição. Tudo é previsível demais", tags: ["longa_relacao", "longa_relacao"] },
      { text: "Não saber qual é o próximo passo da minha vida", tags: ["pos_ruptura", "pos_ruptura"] },
      { text: "Fazer tudo no automático sem sentir prazer em nada", tags: ["responsabilidade", "sustentadora"] }
    ]
  },
  {
    id: 5,
    text: "Quando foi a última vez que você fez algo só por você, sem culpa?",
    options: [
      { text: "Não lembro. Sempre tem alguém que precisa de mim antes", tags: ["sustentadora", "sustentadora"] },
      { text: "Eu faço coisas, mas nada me preenche como antes", tags: ["longa_relacao", "responsabilidade"] },
      { text: "Estou tentando reconstruir isso, mas me sinto perdida", tags: ["pos_ruptura", "pos_ruptura"] },
      { text: "Eu até tento, mas a culpa sempre aparece depois", tags: ["responsabilidade", "sustentadora"] }
    ]
  },
  {
    id: 6,
    text: "Se você pudesse mudar UMA coisa na sua vida agora, seria:",
    options: [
      { text: "Ter alguém que cuide de mim como eu cuido de todos", tags: ["sustentadora", "sustentadora"] },
      { text: "Sentir que minha vida tem sentido além da rotina", tags: ["longa_relacao", "responsabilidade"] },
      { text: "Saber quem eu sou agora, e não quem eu era antes", tags: ["pos_ruptura", "pos_ruptura"] },
      { text: "Parar de viver no piloto automático", tags: ["responsabilidade", "longa_relacao"] }
    ]
  },
  {
    id: 7,
    text: "Qual dessas situações mais te representa hoje?",
    options: [
      { text: "Sou o pilar da família, mas por dentro estou desmoronando", tags: ["sustentadora", "sustentadora"] },
      { text: "Estou em um relacionamento longo e não sei se ainda me reconheço nele", tags: ["longa_relacao", "longa_relacao"] },
      { text: "Passei por uma grande mudança e preciso me reconstruir", tags: ["pos_ruptura", "pos_ruptura"] },
      { text: "Dou conta de tudo, mas me pergunto: e eu, quando vou?", tags: ["responsabilidade", "responsabilidade"] }
    ]
  }
];

const PROFILES = {
  sustentadora: {
    title: "A Sustentadora Invisível",
    subtitle: "Você segura o mundo. Mas quem segura você?",
    description: "Você passou a vida inteira cuidando de todos ao seu redor. Filhos, família, trabalho, casa… tudo funciona porque você não para. Mas no fundo, sente que se perdeu no caminho. O cansaço não é só físico. É de alma. E o mais difícil: ninguém ao redor percebe, porque você aprendeu a sorrir enquanto sustenta tudo sozinha.",
    insight: "Você não precisa desmoronar para ter o direito de se reconstruir.",
    cta_book: "Esse livro foi escrito para mulheres como você: que precisam de permissão para parar e olhar para si mesmas. Um guia para quem sustenta o mundo, mas esqueceu de se incluir na própria história.",
    cta_workshop: "Neste workshop, você vai entender como a adaptação silenciosa te levou a se anular aos poucos, e como reverter esse processo sem culpa.",
    color: "#5B7B5E",
    accent: "#A8C5AB",
    heroIcon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>'
  },
  responsabilidade: {
    title: "A Mulher de Alta Responsabilidade",
    subtitle: "Tudo funciona. Menos a sua vida interior.",
    description: "Você é referência. Competente, resolvida, admirada. Mas existe um vazio que ninguém vê. A vida está funcional, porém não está sendo vivida. E essa distância entre \"dar conta\" e \"se sentir viva\" está crescendo. Você se pergunta se existe algo além de funcionar bem todos os dias.",
    insight: "Vida funcional não é vida vivida. E você merece mais do que apenas funcionar.",
    cta_book: "Esse livro vaite ajudar a nomear o que está faltando e dar o primeiro passo para voltar a se sentir viva. Para quem faz tudo certo, mas sente que algo essencial se perdeu.",
    cta_workshop: "Neste workshop, você vai descobrir como a adaptação silenciosa transformou competência em armadilha emocional, e como reconectar propósito com rotina.",
    color: "#8B6F7B",
    accent: "#D4B5C4",
    heroIcon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/></svg>'
  },
  longa_relacao: {
    title: "A Mulher do Relacionamento Longo",
    subtitle: "Você está presente, mas não se sente vista.",
    description: "São anos de parceria, rotina compartilhada e papéis bem definidos. Mas em algum momento, você percebeu que se adaptou tanto ao outro que já não sabe mais o que quer para si. A relação continua. Você se apagou dentro dela. E o mais sutil: você nem percebeu quando isso começou.",
    insight: "Você não precisa sair de nada para se reencontrar. Mas precisa se olhar com honestidade.",
    cta_book: "Esse livro é um convite para você se redescobrir, dentro ou fora de qualquer relação. Para quem se adaptou tanto que esqueceu quem era antes de ser \"nós\".",
    cta_workshop: "Neste workshop, você vai entender como a adaptação silenciosa apagou sua identidade aos poucos, e como reconstruí-la sem precisar destruir o que já existe.",
    color: "#7B6B5E",
    accent: "#C9B8A8",
    heroIcon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>'
  },
  pos_ruptura: {
    title: "A Recomeçante Pós-Ruptura",
    subtitle: "Tudo mudou. E agora, quem é você?",
    description: "Uma separação, uma perda, uma mudança drástica. Algo que redefiniu sua vida. Você está de pé, mas sente que perdeu a bússola. O mundo continua girando e você se pergunta: como é que eu recomeço a partir daqui? A resposta ainda não veio. Mas o fato de estar procurando já diz muito.",
    insight: "Recomeçar não é apagar o passado. É se autorizar a construir algo novo a partir de quem você é agora. — Ana Sueli",
    cta_book: "Esse livro foi criado para te dar clareza nos primeiros passos do recomeço. Sem pressa, sem julgamento. Para quem precisa de um mapa quando o chão some.",
    cta_workshop: "Neste workshop, você vai transformar a ruptura em reconstrução consciente e entender como a adaptação silenciosa te preparou para esse momento.",
    color: "#8B7B3E",
    accent: "#D4C87A",
    heroIcon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/></svg>'
  }
};

// ============ STATE ============
let currentQuestion = 0;
let scores = { sustentadora: 0, responsabilidade: 0, longa_relacao: 0, pos_ruptura: 0 };

// ============ FUNCTIONS ============
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
}

function startQuiz() {
  currentQuestion = 0;
  scores = { sustentadora: 0, responsabilidade: 0, longa_relacao: 0, pos_ruptura: 0 };
  renderQuestion();
  showScreen('screen-question');
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const total = QUESTIONS.length;

  document.getElementById('progress-label').textContent = `Pergunta ${currentQuestion + 1} de ${total}`;
  document.getElementById('progress-fill').style.width = `${((currentQuestion + 1) / total) * 100}%`;
  document.getElementById('question-text').textContent = q.text;

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
      </span>
      <span>${opt.text}</span>
    `;
    btn.addEventListener('click', () => selectOption(btn, opt.tags));
    container.appendChild(btn);
  });

  const screen = document.getElementById('screen-question');
  screen.classList.remove('active');
  void screen.offsetWidth;
  screen.classList.add('active');
}

function selectOption(btn, tags) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  tags.forEach(t => { scores[t] = (scores[t] || 0) + 1; });

  setTimeout(() => {
    if (currentQuestion < QUESTIONS.length - 1) {
      currentQuestion++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      showResult();
    }
  }, 450);
}

function getWinningProfile() {
  let best = 'sustentadora';
  let max = 0;
  for (const [key, val] of Object.entries(scores)) {
    if (val > max) { max = val; best = key; }
  }
  return best;
}

function showResult() {
  const profileKey = getWinningProfile();
  const p = PROFILES[profileKey];

  const hero = document.getElementById('result-hero');
  hero.style.background = `linear-gradient(135deg, ${p.color}10 0%, ${p.accent}1A 100%)`;
  hero.style.border = `1px solid ${p.accent}44`;

  const heroIcon = document.getElementById('result-hero-icon');
  heroIcon.style.background = `${p.color}18`;
  heroIcon.innerHTML = p.heroIcon;
  heroIcon.querySelector('svg').style.color = p.color;

  document.getElementById('result-title').textContent = p.title;
  document.getElementById('result-title').style.color = p.color;
  document.getElementById('result-subtitle').textContent = p.subtitle;
  document.getElementById('result-description').textContent = p.description;

  const insight = document.getElementById('result-insight');
  insight.style.borderLeft = `4px solid ${p.color}`;
  document.getElementById('result-insight-text').textContent = `"${p.insight}"`;

  const ctaBook = document.getElementById('cta-book');
  ctaBook.style.borderColor = p.accent;
  const ctaBookIcon = document.getElementById('cta-book-icon');
  ctaBookIcon.style.background = `${p.color}12`;
  ctaBookIcon.querySelector('svg').style.color = p.color;
  document.getElementById('cta-book-title').style.color = p.color;
  document.getElementById('cta-book-desc').textContent = p.cta_book;
  document.getElementById('cta-book-desc').style.color = 'var(--text-soft)';
  document.getElementById('cta-book-action').style.color = p.color;

  const ctaWorkshop = document.getElementById('cta-workshop');
  ctaWorkshop.style.background = `linear-gradient(135deg, ${p.color} 0%, ${p.accent} 100%)`;
  ctaWorkshop.style.boxShadow = `0 4px 24px ${p.color}30`;
  const ctaWTag = document.getElementById('cta-workshop-tag');
  ctaWTag.style.background = 'rgba(255,255,255,0.2)';
  const ctaWIcon = document.getElementById('cta-workshop-icon');
  ctaWIcon.style.background = 'rgba(255,255,255,0.18)';
  ctaWIcon.querySelector('svg').style.color = '#fff';
  document.getElementById('cta-workshop-desc').textContent = p.cta_workshop;

  showScreen('screen-result');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
  currentQuestion = 0;
  scores = { sustentadora: 0, responsabilidade: 0, longa_relacao: 0, pos_ruptura: 0 };
  showScreen('screen-welcome');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareWhatsApp() {
  const profileKey = getWinningProfile();
  const profileName = PROFILES[profileKey].title;
  const text = encodeURIComponent(`Acabei de fazer o Quiz do Recomeço e descobri meu perfil: ${profileName}. Faça o seu também: ${window.location.href}`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareNative() {
  if (navigator.share) {
    navigator.share({
      title: 'Quiz · Descubra em que fase do recomeço você está',
      text: 'Descubra seu perfil fazendo este quiz:',
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copiado!');
  }
}
