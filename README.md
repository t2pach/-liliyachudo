# Лилия Чудо — сайт организации праздников

Лендинг на React + TypeScript + Vite. Секции: Hero, Услуги, О компании, Контакты.

## Структура проекта

```
src/
├── main.tsx          # Точка входа
├── App.tsx           # Корневой компонент, секции + Toaster
├── App.css           # Глобальные стили, анимации, утилиты
├── index.css         # Tailwind + CSS-переменные
├── mock.ts           # Данные: услуги, преимущества, контакты, iconMap
├── components/       # Общие компоненты
│   ├── ErrorBoundary.tsx
│   └── ui/           # UI-кит (shadcn-стиль)
├── sections/         # Секции страницы
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
└── lib/
public/               # Статика: gallery/, liliya-photo.jpg
```

## Как запустить

```bash
cd /Users/t1mpach/Downloads/app   # или путь к папке проекта
npm install
npm run dev
```

Откройте в браузере адрес, который выведет Vite (обычно http://localhost:5173).

- **Сборка:** `npm run build` → папка `dist/`
- **Проверка типов:** `npm run typecheck`
- **Полная сборка с проверкой типов:** `npm run build:check`
- **Превью сборки:** `npm run preview`

## Где загружать фото

Все изображения лежат в папке **`public/`**. Чтобы заменить на свои — положите файлы с теми же именами в эти места:

### 1. Главное фото (Hero, шапка сайта)

- **Папка:** `public/`
- **Файл:** `liliya-photo.jpg`  
  Замените этот файл своим фото (рекомендуется квадрат или портрет, например 500×500 px).

### 2. Галерея по типам мероприятий

- **Папка:** `public/gallery/`

Замените файлы, сохраняя **те же имена** (иначе придётся менять пути в `src/mock.ts`):

| Имя файла | Где показывается |
|-----------|-------------------|
| `graduation-1.jpg`, `graduation-2.jpg`, `graduation-3.jpg` | Услуга «Выпускные» |
| `corporate-1.jpg`, `corporate-2.jpg`, `corporate-3.jpg` | Услуга «Корпоративы и тимбилдинг» |
| `thematic-1.jpg`, `thematic-2.jpg`, `thematic-3.jpg` | Услуга «Тематические вечеринки» |
| `birthday-1.jpg`, `birthday-2.jpg`, `birthday-3.jpg` | Услуга «Дни Рождения» |
| `gameshow-1.jpg`, `gameshow-2.jpg`, `gameshow-3.jpg` | Услуга «Игровые шоу» |
| `gender-1.jpg`, `gender-2.jpg`, `gender-3.jpg` | Услуга «Гендер-пати» |
| `wedding-1.jpg`, `wedding-2.jpg`, `wedding-3.jpg` | Услуга «Свадьбы и юбилеи» |

Формат: JPG или PNG. Рекомендуемый размер: не меньше 400×400 px для квадратных превью.

---

Ниже — оригинальное описание шаблона Vite.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
