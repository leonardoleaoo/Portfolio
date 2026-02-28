const STORAGE_LANG_KEY = "portfolio_lang";
const DEFAULT_LANG = "pt-BR";

const ANALYTICS_CONFIG = {
  ga4MeasurementId: "",
  plausibleDomain: "",
  plausibleApiHost: "https://plausible.io",
};

const i18n = {
  "pt-BR": {
    navAriaLabel: "Navegação principal",
    navHome: "Início",
    navAbout: "Sobre",
    navStack: "Stack",
    navProjects: "Projetos",
    navContact: "Contato",
    headerCta: "Ver Portfólio",
    heroPill: "Desenvolvedor Front-end",
    heroIntro: "OLÁ, SOU",
    heroBio:
      "Atuo no desenvolvimento de sistemas que sustentam operação, crescimento e tomada de decisão. Minha atuação integra engenharia de software, visão de produto e execução orientada a resultado.",
    heroPrimaryCta: "Veja meus projetos",
    heroSecondaryCta: "Fale comigo",
    summaryTitle: "Resumo executivo",
    summaryItem1: "Projetos entregues em diferentes segmentos",
    summaryHead2: "Multi-stack",
    summaryItem2: "Web, Mobile, SaaS e automações de operação",
    summaryHead3: "Foco em resultado",
    summaryItem3: "Produto, performance e clareza técnica na execução",
    aboutTitle: "Atuação técnica com visão de negócio",
    aboutText:
      "Estruturo produtos digitais com arquitetura simples, experiência de uso clara e foco em escalabilidade. Trabalho com times e contextos de alta responsabilidade operacional, onde decisões técnicas impactam diretamente produtividade, receita e previsibilidade.",
    aboutCardTitle1: "Engenharia de Produto",
    aboutCardText1: "Transformação de requisitos complexos em entregas objetivas e usáveis.",
    aboutCardTitle2: "Arquitetura Aplicada",
    aboutCardText2: "Decisões técnicas para performance, manutenção e evolução contínua.",
    aboutCardTitle3: "Execução Consistente",
    aboutCardText3: "Planejamento, implementação e refinamento com padrão de produção.",
    stackTitle: "Stack principal e foco técnico",
    stackSubtitle: "Tecnologias onde atuo com mais profundidade em ambiente de produção.",
    stackCardTitle1: "Front-end Web",
    stackCardLevel1: "Avançado",
    stackCardText1: "Interfaces escaláveis com foco em performance, design system e experiência de produto.",
    stackCardTitle2: "Back-end e APIs",
    stackCardLevel2: "Avançado",
    stackCardText2: "Arquitetura de APIs seguras, manutenção previsível e integrações robustas para operação.",
    stackCardTitle3: "Mobile",
    stackCardLevel3: "Intermediário+",
    stackCardText3: "Aplicações móveis orientadas a experiência offline, produtividade e fluidez operacional.",
    stackCardTitle4: "Foco atual",
    stackCardLevel4: "Evolução contínua",
    stackCardText4: "Aprofundamento em arquitetura de produto, observabilidade e otimização de performance ponta a ponta.",
    projectsTitle: 'Aposto que você vai se <span class="text-accent">impressionar</span> com meu trabalho...',
    projectsSubtitle: "Seleção de projetos com diferentes contextos de negócio, escalas e stacks.",
    contactTitle: "Vamos construir algo de impacto?",
    contactText: "Estou disponível para novos desafios, produtos e parcerias estratégicas.",
    instagramLabel: "Instagram",
    projectButton: "Ver no GitHub",
  },
  en: {
    navAriaLabel: "Main navigation",
    navHome: "Home",
    navAbout: "About",
    navStack: "Stack",
    navProjects: "Projects",
    navContact: "Contact",
    headerCta: "View Portfolio",
    heroPill: "Front-end Developer",
    heroIntro: "HELLO, I'M",
    heroBio:
      "I build systems that support operations, growth, and decision-making. My work combines software engineering, product vision, and execution focused on outcomes.",
    heroPrimaryCta: "See my projects",
    heroSecondaryCta: "Contact me",
    summaryTitle: "Executive summary",
    summaryItem1: "Projects delivered across different segments",
    summaryHead2: "Multi-stack",
    summaryItem2: "Web, Mobile, SaaS and operational automation",
    summaryHead3: "Outcome-driven",
    summaryItem3: "Product, performance and technical clarity in execution",
    aboutTitle: "Technical execution with business perspective",
    aboutText:
      "I structure digital products with simple architecture, clear user experience, and scalability in mind. I work in high-responsibility operational contexts, where technical decisions directly impact productivity, revenue, and predictability.",
    aboutCardTitle1: "Product Engineering",
    aboutCardText1: "Turning complex requirements into objective and usable deliveries.",
    aboutCardTitle2: "Applied Architecture",
    aboutCardText2: "Technical decisions for performance, maintainability, and continuous evolution.",
    aboutCardTitle3: "Consistent Execution",
    aboutCardText3: "Planning, implementation, and refinement with production-level standards.",
    stackTitle: "Core stack and technical focus",
    stackSubtitle: "Technologies where I deliver with deeper production-level ownership.",
    stackCardTitle1: "Front-end Web",
    stackCardLevel1: "Advanced",
    stackCardText1: "Scalable interfaces focused on performance, design systems, and product experience.",
    stackCardTitle2: "Back-end and APIs",
    stackCardLevel2: "Advanced",
    stackCardText2: "Secure API architecture, predictable maintenance, and robust integrations for operations.",
    stackCardTitle3: "Mobile",
    stackCardLevel3: "Intermediate+",
    stackCardText3: "Mobile apps focused on offline-first experience, productivity, and operational flow.",
    stackCardTitle4: "Current focus",
    stackCardLevel4: "Continuous growth",
    stackCardText4: "Deepening product architecture, observability, and end-to-end performance optimization.",
    projectsTitle: 'I bet you will be <span class="text-accent">impressed</span> by my work...',
    projectsSubtitle: "A project selection across different business contexts, scales, and stacks.",
    contactTitle: "Let's build something impactful?",
    contactText: "I am available for new challenges, products, and strategic partnerships.",
    instagramLabel: "Instagram",
    projectButton: "View on GitHub",
  },
};

const projetos = [
  {
    nome: "Premium-Interset",
    descricao: {
      "pt-BR": "Plataforma Mobile de Fiscalização de Campo e Operações Offline.",
      en: "Mobile platform for field inspection and offline operations.",
    },
    techStack: ["React Native", "Expo", "TypeScript", "MobX/MST"],
  },
  {
    nome: "NutriOne",
    descricao: {
      "pt-BR": "Plataforma SaaS Multiclínica para Nutrição e Nutrologia.",
      en: "Multi-clinic SaaS platform for nutrition and nutrilogical care.",
    },
    techStack: ["Next.js", "NestJS", "Prisma", "MariaDB", "React Native"],
  },
  {
    nome: "Plataforma para Cursos Online",
    descricao: {
      "pt-BR": "LMS Multi-tenant para Assinaturas e Conteúdo.",
      en: "Multi-tenant LMS for subscriptions and content delivery.",
    },
    techStack: ["React", "Fastify", "TypeScript", "Postgres", "Prisma"],
  },
  {
    nome: "Sistema para Bares",
    descricao: {
      "pt-BR": "Plataforma Multi-tenant de Gestão Operacional para Food Service.",
      en: "Multi-tenant operational management platform for food service.",
    },
    techStack: ["Node.js", "Express", "TypeScript", "MySQL", "React"],
  },
  {
    nome: "APP Restaurantes",
    descricao: {
      "pt-BR": "Plataforma Web de PDV e Gestão de Comandas.",
      en: "Web platform for POS and order management.",
    },
    techStack: ["JavaScript", "Node.js", "SQLite"],
  },
  {
    nome: "Calculadora de Investimentos",
    descricao: {
      "pt-BR": "Plataforma Mobile de Simulação e Planejamento.",
      en: "Mobile platform for investment simulation and planning.",
    },
    techStack: ["React Native", "Expo", "JavaScript", "AsyncStorage"],
  },
  {
    nome: "Ponto Eletrônico",
    descricao: {
      "pt-BR": "Sistema Desktop de Controle de Jornada e Produtividade.",
      en: "Desktop system for work-hour control and productivity.",
    },
    techStack: ["Python", "PySide6", "SQLite"],
  },
  {
    nome: "Gate Vision",
    descricao: {
      "pt-BR": "Sistema de Leitura de Placas e Controle Inteligente de Acesso (LPR/OCR).",
      en: "License plate reading and smart access control system (LPR/OCR).",
    },
    techStack: ["Python", "FastAPI", "OpenCV", "Tesseract"],
  },
  {
    nome: "Copia GIGU",
    descricao: {
      "pt-BR": "Plataforma Mobile de Assistência Operacional para Mobilidade Urbana.",
      en: "Mobile operational support platform for urban mobility.",
    },
    techStack: ["Kotlin", "Jetpack Compose", "Room"],
  },
  {
    nome: "Sistema Amigo Secreto",
    descricao: {
      "pt-BR": "Aplicação Web de Sorteio e Gestão de Eventos.",
      en: "Web application for draw management and event coordination.",
    },
    techStack: ["PHP", "JavaScript", "JSON storage"],
  },
  {
    nome: "Optimizer",
    descricao: {
      "pt-BR": "Suíte de Otimização de Performance e Hardening para Windows.",
      en: "Performance optimization and hardening suite for Windows.",
    },
    techStack: ["C#", ".NET", "WinForms"],
  },
  {
    nome: "Site MSB Engenharia",
    descricao: {
      "pt-BR": "Portal Institucional e Gestão Comercial de Leads.",
      en: "Institutional website and commercial lead management platform.",
    },
    techStack: ["PHP", "HTML", "CSS", "JavaScript"],
  },
];

const githubBase = "https://github.com/leonardoleaoo/";
const projectsGrid = document.getElementById("projectsGrid");
let currentLang = DEFAULT_LANG;

function t(key) {
  return i18n[currentLang]?.[key] ?? i18n[DEFAULT_LANG][key] ?? key;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSavedLanguage() {
  const saved = localStorage.getItem(STORAGE_LANG_KEY);
  if (saved && i18n[saved]) return saved;
  return DEFAULT_LANG;
}

function setSavedLanguage(lang) {
  localStorage.setItem(STORAGE_LANG_KEY, lang);
}

function atualizarBotaoIdiomaAtivo() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
}

function aplicarTraducoesEstaticas() {
  document.documentElement.lang = currentLang;

  const nav = document.querySelector(".main-nav");
  if (nav) nav.setAttribute("aria-label", t("navAriaLabel"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (!key) return;
    element.innerHTML = t(key);
  });
}

function montarCardsProjetos() {
  if (!projectsGrid) return;

  const html = projetos
    .map((projeto, index) => {
      const techTags = projeto.techStack
        .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
        .join("");

      const numero = String(index + 1).padStart(2, "0");
      const descricaoProjeto = projeto.descricao[currentLang] ?? projeto.descricao[DEFAULT_LANG];

      return `
        <article class="project-card pressable">
          <div class="project-top">
            <h3>${escapeHtml(projeto.nome)}</h3>
            <span class="project-index">${numero}</span>
          </div>
          <p>${escapeHtml(descricaoProjeto)}</p>
          <div class="tech-list">${techTags}</div>
          <a class="brutal-btn pressable"
             href="${githubBase}"
             target="_blank"
             rel="noopener noreferrer"
             data-track="project_github_click"
             data-track-label="${escapeHtml(projeto.nome)}">
            ${t("projectButton")}
          </a>
        </article>
      `;
    })
    .join("");

  projectsGrid.innerHTML = html;
}

function animarCardsProjetos() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerEl = trigger.trigger;
    if (triggerEl && triggerEl.classList && triggerEl.classList.contains("project-card")) {
      trigger.kill();
    }
  });

  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 54,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function configurarAnimacoes() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".site-header", {
    opacity: 0,
    y: -20,
    duration: 0.55,
    ease: "power3.out",
  });

  gsap.from(".hero-anim", {
    opacity: 0,
    y: 46,
    duration: 0.82,
    ease: "power3.out",
    stagger: 0.14,
    delay: 0.15,
  });

  gsap.utils.toArray(".reveal-up").forEach((bloco) => {
    gsap.from(bloco, {
      opacity: 0,
      y: 50,
      duration: 0.72,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bloco,
        start: "top 84%",
        toggleActions: "play none none reverse",
      },
    });
  });

  animarCardsProjetos();
}

function configurarNavegacaoSuave() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const destino = link.getAttribute("href");
      if (!destino || destino === "#") return;

      const secao = document.querySelector(destino);
      if (!secao) return;

      event.preventDefault();
      secao.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

function aplicarEstadoPressable() {
  document
    .querySelectorAll(".brutal-btn, .project-card, .mini-card, .stack-card")
    .forEach((elemento) => {
      elemento.classList.add("pressable");
    });
}

function loadScript(src, attributes = {}) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;

  Object.entries(attributes).forEach(([name, value]) => {
    if (value === true) {
      script.setAttribute(name, "");
      return;
    }
    script.setAttribute(name, String(value));
  });

  document.head.appendChild(script);
}

function initGA4() {
  const measurementId = ANALYTICS_CONFIG.ga4MeasurementId.trim();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: true,
  });

  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`);
}

function initPlausible() {
  const domain = ANALYTICS_CONFIG.plausibleDomain.trim();
  if (!domain) return;

  const host = ANALYTICS_CONFIG.plausibleApiHost.replace(/\/+$/, "");
  loadScript(`${host}/js/script.js`, {
    "data-domain": domain,
    defer: true,
  });
}

function initAnalytics() {
  initGA4();
  initPlausible();
}

function trackEvent(eventName, props = {}) {
  const safeEvent = String(eventName || "").trim();
  if (!safeEvent) return;

  const payload = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, String(value ?? "").trim().slice(0, 120)])
  );

  if (typeof window.gtag === "function") {
    window.gtag("event", safeEvent, payload);
  }

  if (typeof window.plausible === "function") {
    window.plausible(safeEvent, { props: payload });
  }
}

function configurarTracking() {
  document.addEventListener("click", (event) => {
    const trackedElement = event.target.closest("[data-track]");
    if (!trackedElement) return;

    const eventName = trackedElement.getAttribute("data-track");
    if (!eventName) return;

    const label =
      trackedElement.getAttribute("data-track-label") ||
      trackedElement.textContent ||
      eventName;

    trackEvent(eventName, {
      label,
      lang: currentLang,
      path: window.location.pathname,
    });
  });
}

function aplicarIdioma(lang, save = true) {
  if (!i18n[lang]) return;

  const previousLang = currentLang;
  currentLang = lang;
  if (save) setSavedLanguage(currentLang);

  atualizarBotaoIdiomaAtivo();
  aplicarTraducoesEstaticas();
  montarCardsProjetos();
  aplicarEstadoPressable();
  animarCardsProjetos();

  if (previousLang !== currentLang) {
    trackEvent("language_switch", {
      from: previousLang,
      to: currentLang,
    });
  }
}

function configurarSeletorIdioma() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (!lang || lang === currentLang) return;
      aplicarIdioma(lang, true);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  currentLang = getSavedLanguage();

  initAnalytics();
  aplicarTraducoesEstaticas();
  montarCardsProjetos();
  configurarNavegacaoSuave();
  configurarSeletorIdioma();
  configurarTracking();
  atualizarBotaoIdiomaAtivo();
  aplicarEstadoPressable();
  configurarAnimacoes();
});
