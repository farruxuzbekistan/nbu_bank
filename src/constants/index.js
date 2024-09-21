import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "features",
    title: "Особенности",
  },
  {
    id: "product",
    title: "Продукт",
  },
  {
    id: "clients",
    title: "Клиенты",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Награды",
    content:
      "Лучшие кредитные карты предлагают заманчивые комбинации акций и призов.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Защита",
    content:
      "Мы принимаем проактивные меры, чтобы убедиться, что ваша информация и транзакции защищены.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Перевод баланса",
    content:
      "Перевод баланса по кредитной карте может сэкономить вам значительные средства на процентах.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "НБУ помог мне не только организовать личные финансы, но и упростить управление счетами для моего бизнеса. Их мобильное приложение очень удобное и всегда под рукой.",
    name: "Мадина Каримова",
    title: "Владелец кафе",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "С НБУ мои международные сделки проходят быстро и без проблем. Это действительно профессиональный и надёжный банк для предпринимателей.",
    name: "Азизбек Абдурахмонов",
    title: "Финансовый консультант",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "НБУ предлагает одни из лучших условий для бизнеса в Узбекистане. Благодаря их сервисам, я могу легко управлять своими финансами и развивать своё дело.",
    name: "Абдулла Камолов",
    title: "Основатель и генеральный директор",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "активных пользователей",
    value: "10000+",
  },
  {
    id: "stats-2",
    title: "доверенных компаний",
    value: "300+",
  },
  {
    id: "stats-3",
    title: "проведенных транзакций",
    value: "$500M+",
  },
];

export const footerLinks = [
  {
    title: "Полезные ссылки",
    links: [
      {
        name: "Контент",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Как это работает",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Создать",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Исследовать",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Условия и услуги",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Сообщество",
    links: [
      {
        name: "Центр помощи",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Партнеры",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Предложения",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Блог",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Рассылки",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Партнерство",
    links: [
      {
        name: "Наши партнеры",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Стать партнером",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
