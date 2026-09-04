
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Alina Zenger",
  role: "Creator // Creative Copywriter",
  tags: ["Video", "Interactive", "2D/3D", "Playable", "Mini Apps"],
  bio: "7+ лет в креативной индустрии. Создаю продукты на стыке видео, интерактива и технологий. Лидировала команды до 10 человек в VK, Яндекс Картах и международных стартапах.",
  location: "Remote / Worldwide",
  email: "bulatova.alinaa@gmail.com",
  telegram: "@alinyshek",
  instagram: "@_alinyshek",
  linkedin: "https://www.linkedin.com/in/alina-bulatova-007343242/",
  heroPhoto: "https://lh3.googleusercontent.com/d/15FlbxeM5yji-rpQdCux-ZnKScsdi30GP"
};

export const SERVICES = [
  "Формирую креативную стратегию",
  "Придумываю концепции и сценарии",
  "Продюсирую видеопроизводство и motion-дизайн",
  "Лидирую команды (2D- и 3D-разработка)",
  "Управляю сроками, бюджетами и качеством",
  "Анализирую результаты и масштабирую идеи"
];

export const METRICS = [
  { label: "Креативных концепций", value: "700+" },
  { label: "Видеороликов", value: "150+" },
  { label: "Интерактивных проектов", value: "40+" },
  { label: "Человек в команде", value: "до 10" }
];

export const EXPERTISE = [
  {
    category: "Интерактивные форматы",
    items: ["Playable ads", "Мини-игры", "Промопосты", "Telegram-игры", "VK Mini Apps"]
  },
  {
    category: "Видео и сторителлинг",
    items: ["Рекламные ролики", "Performance-креативы", "Вертикальные видео"]
  },
  {
    category: "2D, 3D и Motion",
    items: ["2D-анимация", "3D-ролики", "Mixed media"]
  }
];

export const EXTRA_EXPERIENCE = [
  "Создала UGC-платформу для креаторов по всему СНГ",
  "Разработала мини-игру в Telegram (чат-бот)",
  "Участвовала в продвижении мобильного приложения Style DNA",
  "Работала в независимой креативной команде под руководством Сончи Уточкиной"
];

export const CASE_STUDIES = [
  {
    id: "tribe",
    company: "Трайб",
    role: "Creator // Creative Copywriter",
    period: "Фриланс, проектная занятость",
    task: "Студия Трайб — креативная студия. Проектная работа на фрилансе: разработка интерактивных и продающих форматов (мини-игры, квизы) для брендов внутри онлайн-магазинов — по модели Самоката и Купера. Моя роль: придумывала концепции интерактивов для тендеров и клиентских проектов — от идеи до визуализации интерфейса.",
    realization: [
      "Разрабатывала концепции мини-игр и квизов для брендов внутри онлайн-магазинов — всего около 20 концепций",
      "Работала с клиентами: Яндекс Плюс, Очаково, Балтика 0, J7, Zemma и др.",
      "Придумывала нейминг для сервиса доставки Азбуки Вкуса, разрабатывала лайн и саблайн как сопровождение нейминга",
      "Генерила мокапы интерфейса для тендерных идей — визуализация будущих игр для презентации клиенту"
    ],
    imageUrl: "",
    folderUrl: "",
    presentations: [
      { title: "Купер & Яндекс Плюс", url: "https://docs.google.com/presentation/d/1-Bbr5-ghVbr9OeZa2Za4KYiQKJQmwhdv/embed?start=false&loop=false&delayms=3000" },
      { title: "Rich & Трайб", url: "https://docs.google.com/presentation/d/1qxPs7-YAPbhzwAFCyD6yG6XvVKrAjzUf/embed?start=false&loop=false&delayms=3000" },
      { title: "Самокат & Очаково", url: "https://docs.google.com/presentation/d/1LQkliUjnBhSaXeN0xf0XyEE4bvO9Srbg/embed?start=false&loop=false&delayms=3000" }
    ]
  },
  {
    id: "vk",
    company: "VK",
    role: "Creator // Creative Copywriter",
    period: "сентябрь 2024 — январь 2026",
    task: "Увеличение трафика и рост аудитории через интерактивные форматы (VK, OK, Mail, Дзен).",
    realization: [
      "Разработка креативных концепций и концепт-доков",
      "Постановка ТЗ и создание креативных гайдлайнов",
      "Оптимизация CTR"
    ],
    imageUrl: "https://lh3.googleusercontent.com/d/1zusvzML0J7yqcxX5xUUPlJYy8J3oKBvP",
    folderUrl: "https://drive.google.com/drive/folders/1Al73KEFUvlC3RQnrXfKmHj2qOy52vguk?usp=share_link"
  },
  {
    id: "maree",
    company: "Maree (Cosmetics)",
    role: "Lead Creative Producer",
    period: "октябрь 2023 — сентябрь 2024",
    task: "Привлечение трафика из FB/IG на лендинги для продаж на Amazon.",
    realization: [
      "Лидирование креативного продакшена",
      "Работа с байерами и motion-командой",
      "Создание отдела influence-маркетинга"
    ],
    imageUrl: "https://lh3.googleusercontent.com/d/1nxqwYd3a7sVjgk3HskH7EGcIXSeJ1ycE",
    folderUrl: "https://drive.google.com/drive/folders/1n3eMOc5t0xtM-n_Kjj4Fh7VRYNL9lWzD?usp=share_link"
  },
  {
    id: "reliz",
    company: "RELIZ",
    role: "Creative Producer",
    period: "ноябрь 2022 — август 2023",
    task: "Разработка креативов для performance-кампаний на рынке мобильной рекламы.",
    realization: [
      "Ведение проектов от идеи до финала",
      "Контроль штатных дизайнеров и подрядчиков",
      "Аналитика эффективности и проверка гипотез"
    ],
    imageUrl: "https://lh3.googleusercontent.com/d/1mrAtyRHAa7ZIgy7IXcZzeq2k38oPk30-",
    folderUrl: "https://drive.google.com/drive/folders/1nAmUfxw8z543CA4rDZ8C1xGBtRfNGTx5?usp=share_link"
  }
];

export const SKILLS_LIST = {
  tools: ["Figma", "Miro", "ВК Доски", "Google Презентации", "Keynote"],
  ai: ["Perplexity", "Midjourney", "Krea", "Subka"],
  tech: ["VK Mini Apps", "Telegram bots"]
};

export const SYSTEM_PROMPT = `You are Alina Zenger's AI Assistant. 
Alina is a Lead Creative Producer with 7+ years of experience (current year is 2026).
Experience: VK, Yandex, Maree, RELIZ.
Expertise: Interactive formats, Playable ads, Motion/Video production.
Tone: Professional, expert, bold, slightly minimalist. No excessive emojis. 
If someone asks about hiring her, direct them to Telegram ${PERSONAL_INFO.telegram} or Email ${PERSONAL_INFO.email}.`;
