import type { ComponentType } from "react";
import { 
  GraduationCap, 
  Users, 
  PartyPopper, 
  Sparkles, 
  Gamepad2, 
  Gift, 
  Heart,
  Award,
  Target,
  Zap
} from "lucide-react";

export interface ServicePackage {
  name: string;
  duration: string;
  guests: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  packages: ServicePackage[];
  icon: string;
  gallery: string[];
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  experience: string;
  events: string;
  clients: string;
  team: string;
  phone: string;
  email: string;
  address: string;
  socials: {
    instagram: string;
    vk: string;
    telegram: string;
  };
}

export const services: Service[] = [
  {
    id: 1,
    title: "Выпускные",
    shortDescription: "Незабываемый выпускной для детского сада или школы",
    description: "Организуем яркий и запоминающийся выпускной, который станет настоящим праздником для детей и родителей. Полное сопровождение от идеи до реализации.",
    features: [
      "Разработка концепции и сценария мероприятия",
      "Подбор и оформление площадки",
      "Профессиональные ведущие и аниматоры",
      "Фото и видеосъемка",
      "Кейтеринг и торт на заказ",
      "Подарки и дипломы выпускникам"
    ],
    packages: [
      { name: "Базовый", duration: "2 часа", guests: "до 15 детей" },
      { name: "Стандарт", duration: "3 часа", guests: "до 30 детей" },
      { name: "Премиум", duration: "4 часа", guests: "до 50 детей" }
    ],
    icon: "GraduationCap",
    gallery: [
      "/gallery/graduation-1.jpg",
      "/gallery/graduation-2.jpg",
      "/gallery/graduation-3.jpg"
    ]
  },
  {
    id: 2,
    title: "Корпоративы и тимбилдинг",
    shortDescription: "Сплочение команды и незабываемый отдых",
    description: "Организуем корпоративные мероприятия любого масштаба. От неформальных вечеринок до масштабных тимбилдингов на природе.",
    features: [
      "Индивидуальная программа под цели компании",
      "Профессиональные тренеры и ведущие",
      "Организация на любой площадке",
      "Тимбилдинговые активности и квесты",
      "Полное техническое обеспечение",
      "Фото и видеоотчет"
    ],
    packages: [
      { name: "Корпоратив", duration: "4 часа", guests: "до 30 человек" },
      { name: "Тимбилдинг", duration: "6 часов", guests: "до 50 человек" },
      { name: "Premium", duration: "8 часов", guests: "до 100 человек" }
    ],
    icon: "Users",
    gallery: [
      "/gallery/corporate-1.jpg",
      "/gallery/corporate-2.jpg",
      "/gallery/corporate-3.jpg"
    ]
  },
  {
    id: 3,
    title: "Тематические вечеринки",
    shortDescription: "Погрузитесь в атмосферу любимой эпохи или стиля",
    description: "Создаем уникальные тематические вечеринки с полным погружением в атмосферу. От ретро-вечеринок до футуристических киберпати.",
    features: [
      "Разработка уникальной концепции",
      "Полное оформление в выбранном стиле",
      "Костюмы и аксессуары для гостей",
      "Тематическое меню и напитки",
      "Интерактивные развлечения",
      "Фотозона с профессиональным фотографом"
    ],
    packages: [
      { name: "Mini", duration: "3 часа", guests: "до 15 человек" },
      { name: "Standard", duration: "4 часа", guests: "до 30 человек" },
      { name: "Grand", duration: "5 часов", guests: "до 50 человек" }
    ],
    icon: "PartyPopper",
    gallery: [
      "/gallery/thematic-1.jpg",
      "/gallery/thematic-2.jpg",
      "/gallery/thematic-3.jpg"
    ]
  },
  {
    id: 4,
    title: "Дни Рождения",
    shortDescription: "Для детей и взрослых — любой возраст и формат",
    description: "Организуем дни рождения для любого возраста. Детские праздники с любимыми персонажами или взрослые вечеринки в любом формате.",
    features: [
      "Персонализированный сценарий",
      "Профессиональные аниматоры",
      "Оформление шарами и декором",
      "Игры, конкурсы и мастер-классы",
      "Торт и сладкий стол",
      "Фото и видеосъемка"
    ],
    packages: [
      { name: "Детский", duration: "2 часа", guests: "до 10 детей" },
      { name: "Взрослый", duration: "4 часа", guests: "до 20 человек" },
      { name: "Family", duration: "5 часов", guests: "до 40 человек" }
    ],
    icon: "Sparkles",
    gallery: [
      "/gallery/birthday-1.jpg",
      "/gallery/birthday-2.jpg",
      "/gallery/birthday-3.jpg"
    ]
  },
  {
    id: 5,
    title: "Игровые шоу",
    shortDescription: "Интерактивные развлечения для любой компании",
    description: "Организуем захватывающие игровые шоу и квесты. От викторин до полноценных иммерсивных представлений с актерами.",
    features: [
      "Уникальные игровые форматы",
      "Профессиональные ведущие",
      "Интерактивное оборудование",
      "Призы и подарки участникам",
      "Адаптация под любую аудиторию",
      "Фото и видеофиксация"
    ],
    packages: [
      { name: "Квиз", duration: "2 часа", guests: "до 30 человек" },
      { name: "Квест", duration: "3 часа", guests: "до 50 человек" },
      { name: "Шоу", duration: "4 часа", guests: "до 100 человек" }
    ],
    icon: "Gamepad2",
    gallery: [
      "/gallery/gameshow-1.jpg",
      "/gallery/gameshow-2.jpg",
      "/gallery/gameshow-3.jpg"
    ]
  },
  {
    id: 6,
    title: "Гендер-пати",
    shortDescription: "Трогательное открытие пола будущего малыша",
    description: "Организуем трогательное и запоминающееся гендер-пати. Красивое раскрытие пола малыша для самых близких людей.",
    features: [
      "Индивидуальная концепция раскрытия",
      "Оформление в розовых или голубых тонах",
      "Фотозона для памятных снимков",
      "Ведущий мероприятия",
      "Кейтеринг и торт-сюрприз",
      "Фото и видеосъемка"
    ],
    packages: [
      { name: "Intimate", duration: "2 часа", guests: "до 10 человек" },
      { name: "Family", duration: "3 часа", guests: "до 25 человек" },
      { name: "Party", duration: "4 часа", guests: "до 40 человек" }
    ],
    icon: "Gift",
    gallery: [
      "/gallery/gender-1.jpg",
      "/gallery/gender-2.jpg",
      "/gallery/gender-3.jpg"
    ]
  },
  {
    id: 7,
    title: "Свадьбы и юбилеи",
    shortDescription: "Самые важные даты deserve лучшего праздника",
    description: "Организуем свадьбы и юбилеи любого масштаба. От камерных семейных торжеств до грандиозных банкетов.",
    features: [
      "Полное свадебное сопровождение",
      "Подбор площадки и подрядчиков",
      "Разработка концепции и декора",
      "Координация в день мероприятия",
      "Программа с ведущим и артистами",
      "Фото, видео и love-story"
    ],
    packages: [
      { name: "Камерная", duration: "4 часа", guests: "до 30 человек" },
      { name: "Классическая", duration: "6 часов", guests: "до 70 человек" },
      { name: "Grand", duration: "8 часов", guests: "до 150 человек" }
    ],
    icon: "Heart",
    gallery: [
      "/gallery/wedding-1.jpg",
      "/gallery/wedding-2.jpg",
      "/gallery/wedding-3.jpg"
    ]
  }
];

export const advantages: Advantage[] = [
  {
    icon: "Award",
    title: "Опыт и профессионализм",
    description: "13+ лет опыта в организации праздников любой сложности"
  },
  {
    icon: "Target",
    title: "Индивидуальный подход",
    description: "Каждое мероприятие уникально и создается с учетом ваших пожеланий"
  },
  {
    icon: "Heart",
    title: "Любовь к деталям",
    description: "Продумываем каждую мелочь, чтобы ваш праздник был идеален"
  },
  {
    icon: "Zap",
    title: "Быстрая реакция",
    description: "Ответим на заявку в течение 15 минут и поможем с выбором"
  }
];

export const companyInfo: CompanyInfo = {
  name: "Лилия Чудо",
  description: "Создаем незабываемые праздники и волшебные моменты с 2015 года",
  experience: "13+ лет опыта",
  events: "1500+ мероприятий",
  clients: "15000+ довольных клиентов",
  team: "Команда профессионалов",
  phone: "+7 982 827-17-84",
  email: "info@liliachudo.ru",
  address: "Москва, ул. Праздничная, д. 10",
  socials: {
    instagram: "@liliyachudo",
    vk: "vk.ru/liliyachudo18",
    telegram: "@liliachudo"
  }
};

export const stats = [
  { value: "13+", label: "лет опыта" },
  { value: "1500+", label: "мероприятий" },
  { value: "15000+", label: "счастливых клиентов" }
];

export const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  GraduationCap,
  Users,
  PartyPopper,
  Sparkles,
  Gamepad2,
  Gift,
  Heart,
  Award,
  Target,
  Zap
};
