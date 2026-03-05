const STORAGE_LANG_KEY = "portfolio_lang";
const STORAGE_THEME_KEY = "portfolio_theme";
const DEFAULT_LANG = "pt-BR";
const FORCED_THEME = "dark";

const ANALYTICS_CONFIG = {
  ga4MeasurementId: "",
  plausibleDomain: "",
  plausibleApiHost: "https://plausible.io",
};

const i18n = {
  "pt-BR": {
    navAriaLabel: "Navegação principal",
    mobileMenuAriaOpen: "Abrir menu principal",
    mobileMenuAriaClose: "Fechar menu principal",
    navHome: "Início",
    navAbout: "Sobre",
    navStack: "Stack",
    navProjects: "Projetos",
    navContact: "Contato",
    themeToggleAria: "Alternar tema de cores",
    themeLightLabel: "Modo claro",
    themeDarkLabel: "Modo escuro",
    headerCta: "Ver cases",
    heroPill: "Engenharia de software e produto",
    heroIntro: "OLÁ, SOU",
    heroBio:
      "Projeto e implemento produtos digitais com foco em clareza, performance e impacto de negócio. Do discovery à entrega, conecto decisão técnica com resultado mensurável.",
    heroPrimaryCta: "Explorar projetos",
    heroSecondaryCta: "Iniciar conversa",
    summaryTitle: "Resumo de atuação",
    summaryItem1: "+20 projetos entregues em operações críticas e produtos digitais",
    summaryHead2: "Multi-stack",
    summaryItem2: "Web, Mobile, SaaS e automações de operação",
    summaryHead3: "Entrega orientada a impacto",
    summaryItem3: "Produto, performance e execução técnica com previsibilidade",
    aboutTitle: "Tecnologia aplicada a crescimento de negócio",
    aboutText:
      "Desenho e evoluo produtos com arquitetura sustentável, UX objetiva e ciclos curtos de entrega. Atuo em contextos de alta responsabilidade operacional, onde decisões técnicas afetam receita, produtividade e escala.",
    aboutCardTitle1: "Engenharia de Produto",
    aboutCardText1: "Converto requisitos complexos em soluções úteis, com escopo claro e entrega contínua.",
    aboutCardTitle2: "Arquitetura Aplicada",
    aboutCardText2: "Estruturas técnicas que aceleram evolução sem sacrificar estabilidade.",
    aboutCardTitle3: "Execução Consistente",
    aboutCardText3: "Planejamento, implementação e melhoria contínua com padrão de produção.",
    stackTitle: "Stack principal e especialidades",
    stackSubtitle: "Tecnologias aplicadas em produtos reais, com foco em qualidade e manutenção.",
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
    projectsTitle: 'Projetos com <span class="text-accent">engenharia aplicada</span> em produção',
    projectsSubtitle: "Soluções para contextos reais de operação, produto e escala.",
    contactTitle: "Vamos tirar uma ideia do papel?",
    contactText: "Disponível para novos produtos, modernização de sistemas e parcerias de longo prazo.",
    instagramLabel: "Instagram",
  },
  en: {
    navAriaLabel: "Main navigation",
    mobileMenuAriaOpen: "Open main menu",
    mobileMenuAriaClose: "Close main menu",
    navHome: "Home",
    navAbout: "About",
    navStack: "Stack",
    navProjects: "Projects",
    navContact: "Contact",
    themeToggleAria: "Toggle color theme",
    themeLightLabel: "Light mode",
    themeDarkLabel: "Dark mode",
    headerCta: "View case studies",
    heroPill: "Software and product engineering",
    heroIntro: "HELLO, I'M",
    heroBio:
      "I design and ship digital products with strong clarity, performance, and business impact. From discovery to delivery, I connect technical decisions to measurable outcomes.",
    heroPrimaryCta: "Explore projects",
    heroSecondaryCta: "Start a conversation",
    summaryTitle: "Execution summary",
    summaryItem1: "20+ projects delivered across critical operations and digital products",
    summaryHead2: "Multi-stack",
    summaryItem2: "Web, Mobile, SaaS and operational automation",
    summaryHead3: "Impact-oriented delivery",
    summaryItem3: "Product, performance and predictable technical execution",
    aboutTitle: "Technology aligned with business growth",
    aboutText:
      "I build and evolve products with sustainable architecture, objective UX, and short delivery cycles. I work in high-responsibility contexts where technical choices directly affect revenue, productivity, and scale.",
    aboutCardTitle1: "Product Engineering",
    aboutCardText1: "I turn complex requirements into usable solutions with clear scope and continuous delivery.",
    aboutCardTitle2: "Applied Architecture",
    aboutCardText2: "Technical foundations that speed up evolution without losing stability.",
    aboutCardTitle3: "Consistent Execution",
    aboutCardText3: "Planning, implementation, and continuous improvement with production standards.",
    stackTitle: "Core stack and specialties",
    stackSubtitle: "Technologies applied to real products with quality and long-term maintainability.",
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
    projectsTitle: 'Projects with <span class="text-accent">applied engineering</span> in production',
    projectsSubtitle: "Solutions built for real-world product, operations, and scale challenges.",
    contactTitle: "Ready to bring an idea to production?",
    contactText: "Available for new products, system modernization, and long-term partnerships.",
    instagramLabel: "Instagram",
  },
};

const projetos = [
  {
    nome: "Field Inspection Operations Platform",
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
    nome: "Multi-tenant Learning Management System",
    descricao: {
      "pt-BR": "LMS Multi-tenant para Assinaturas e Conteúdo.",
      en: "Multi-tenant LMS for subscriptions and content delivery.",
    },
    techStack: ["React", "Fastify", "TypeScript", "Postgres", "Prisma"],
  },
  {
    nome: "Food Service Operations Management Platform",
    descricao: {
      "pt-BR": "Plataforma Multi-tenant de Gestão Operacional para Food Service.",
      en: "Multi-tenant operational management platform for food service.",
    },
    techStack: ["Node.js", "Express", "TypeScript", "MySQL", "React"],
  },
  {
    nome: "POS and Order Workflow Web Platform",
    descricao: {
      "pt-BR": "Plataforma Web de PDV e Gestão de Comandas.",
      en: "Web platform for POS and order management.",
    },
    techStack: ["JavaScript", "Node.js", "SQLite"],
  },
  {
    nome: "Investment Simulation Mobile Engine",
    descricao: {
      "pt-BR": "Plataforma Mobile de Simulação e Planejamento.",
      en: "Mobile platform for investment simulation and planning.",
    },
    techStack: ["React Native", "Expo", "JavaScript", "AsyncStorage"],
  },
  {
    nome: "Workforce Time Tracking Desktop System",
    descricao: {
      "pt-BR": "Sistema Desktop de Controle de Jornada e Produtividade.",
      en: "Desktop system for work-hour control and productivity.",
    },
    techStack: ["Python", "PySide6", "SQLite"],
  },
  {
    nome: "LPR/OCR Smart Access Control System",
    descricao: {
      "pt-BR": "Sistema de Leitura de Placas e Controle Inteligente de Acesso (LPR/OCR).",
      en: "License plate reading and smart access control system (LPR/OCR).",
    },
    techStack: ["Python", "FastAPI", "OpenCV", "Tesseract"],
  },
  {
    nome: "Urban Mobility Operational Assistant App",
    descricao: {
      "pt-BR": "Plataforma Mobile de Assistência Operacional para Mobilidade Urbana.",
      en: "Mobile operational support platform for urban mobility.",
    },
    techStack: ["Kotlin", "Jetpack Compose", "Room"],
  },
  {
    nome: "Event Draw Management Web Application",
    descricao: {
      "pt-BR": "Aplicação Web de Sorteio e Gestão de Eventos.",
      en: "Web application for draw management and event coordination.",
    },
    techStack: ["PHP", "JavaScript", "JSON storage"],
  },
  {
    nome: "Windows Performance Optimization Suite",
    descricao: {
      "pt-BR": "Suíte de Otimização de Performance e Hardening para Windows.",
      en: "Performance optimization and hardening suite for Windows.",
    },
    techStack: ["C#", ".NET", "WinForms"],
  },
  {
    nome: "Engineering Corporate Lead Platform",
    descricao: {
      "pt-BR": "Portal Institucional e Gestão Comercial de Leads.",
      en: "Institutional website and commercial lead management platform.",
    },
    techStack: ["PHP", "HTML", "CSS", "JavaScript"],
  },
];

const projectsGrid = document.getElementById("projectsGrid");
let currentLang = DEFAULT_LANG;
let currentTheme = "dark";
const prefersReducedMotion =
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

function getDefaultTheme() {
  return FORCED_THEME;
}

function getSavedTheme() {
  return FORCED_THEME;
}

function setSavedTheme(theme) {
  localStorage.setItem(STORAGE_THEME_KEY, FORCED_THEME);
}

function atualizarThemeToggleUI() {
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleText = document.getElementById("themeToggleText");
  if (!themeToggle || !themeToggleText) return;

  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  themeToggleText.textContent = nextTheme === "light" ? t("themeLightLabel") : t("themeDarkLabel");
  themeToggle.setAttribute("aria-label", t("themeToggleAria"));
}

function aplicarTema(theme, save = true) {
  if (theme !== "dark" && theme !== "light") return;
  theme = FORCED_THEME;
  const previousTheme = currentTheme;
  currentTheme = theme;

  document.documentElement.setAttribute("data-theme", currentTheme);
  atualizarThemeToggleUI();
  if (save) setSavedTheme(currentTheme);

  if (previousTheme !== currentTheme) {
    trackEvent("theme_switch", {
      from: previousTheme,
      to: currentTheme,
    });
  }
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

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  if (mobileMenuButton) {
    const isOpen = mobileMenuButton.classList.contains("active");
    mobileMenuButton.setAttribute(
      "aria-label",
      isOpen ? t("mobileMenuAriaClose") : t("mobileMenuAriaOpen")
    );
  }

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

  atualizarThemeToggleUI();
}

function montarCardsProjetos() {
  if (!projectsGrid) return;

  const html = projetos
    .map((projeto, index) => {
      const techTags = projeto.techStack
        .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
        .join("");

      const numero = String(index + 1).padStart(2, "0");
      const nomeProjeto = projeto.nome?.[currentLang] ?? projeto.nome?.[DEFAULT_LANG] ?? projeto.nome;
      const descricaoProjeto = projeto.descricao[currentLang] ?? projeto.descricao[DEFAULT_LANG];

      return `
        <article class="project-card pressable">
          <div class="project-top">
            <h3>${escapeHtml(nomeProjeto)}</h3>
            <span class="project-index">${numero}</span>
          </div>
          <p>${escapeHtml(descricaoProjeto)}</p>
          <div class="tech-list">${techTags}</div>
        </article>
      `;
    })
    .join("");

  projectsGrid.innerHTML = html;
}

function animarCardsProjetos() {
  if (prefersReducedMotion) return;
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
  if (prefersReducedMotion) return;
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
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      fecharMenuMobile();
    });
  });
}

function atualizarAriaMenuMobile(isOpen) {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  if (!mobileMenuButton) return;

  mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
  mobileMenuButton.setAttribute(
    "aria-label",
    isOpen ? t("mobileMenuAriaClose") : t("mobileMenuAriaOpen")
  );
}

function fecharMenuMobile() {
  const nav = document.querySelector(".main-nav");
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  if (!nav || !mobileMenuButton) return;

  nav.classList.remove("open");
  mobileMenuButton.classList.remove("active");
  document.body.classList.remove("menu-open");
  atualizarAriaMenuMobile(false);
}

function configurarMenuMobile() {
  const nav = document.querySelector(".main-nav");
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  if (!nav || !mobileMenuButton) return;

  mobileMenuButton.addEventListener("click", () => {
    const shouldOpen = !nav.classList.contains("open");
    nav.classList.toggle("open", shouldOpen);
    mobileMenuButton.classList.toggle("active", shouldOpen);
    document.body.classList.toggle("menu-open", shouldOpen);
    atualizarAriaMenuMobile(shouldOpen);
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (nav.contains(target) || mobileMenuButton.contains(target)) return;
    fecharMenuMobile();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) fecharMenuMobile();
  });
}

function configurarSecaoAtivaNoMenu() {
  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
  if (navLinks.length === 0) return;

  const sectionMap = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      if (!id) return null;
      const section = document.querySelector(id);
      if (!section) return null;
      return { link, section };
    })
    .filter(Boolean);

  if (sectionMap.length === 0) return;

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  setActiveLink(sectionMap[0].section.id);

  const observer = new IntersectionObserver(
    (entries) => {
      let mostVisible = null;

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
          mostVisible = entry;
        }
      });

      if (mostVisible) setActiveLink(mostVisible.target.id);
    },
    {
      rootMargin: "-38% 0px -48% 0px",
      threshold: [0.1, 0.3, 0.6],
    }
  );

  sectionMap.forEach(({ section }) => observer.observe(section));
}

function configurarAnoRodape() {
  const yearElement = document.getElementById("currentYear");
  if (!yearElement) return;
  yearElement.textContent = String(new Date().getFullYear());
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

function configurarSeletorTema() {
  return;
}

document.addEventListener("DOMContentLoaded", () => {
  currentLang = getSavedLanguage();
  currentTheme = getSavedTheme();
  aplicarTema(currentTheme, false);

  initAnalytics();
  configurarAnoRodape();
  aplicarTraducoesEstaticas();
  montarCardsProjetos();
  configurarMenuMobile();
  configurarNavegacaoSuave();
  configurarSecaoAtivaNoMenu();
  configurarSeletorIdioma();
  configurarSeletorTema();
  configurarTracking();
  atualizarBotaoIdiomaAtivo();
  aplicarEstadoPressable();
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => configurarAnimacoes(), { timeout: 600 });
  } else {
    setTimeout(() => configurarAnimacoes(), 120);
  }
});
