# Лапки — UI-компоненты на React (ЛР19)

Базовая структура веб-приложения на React для мобильного приложения «Лапки»
(автоматизация адаптации и сопровождения животных из приютов с ИИ-ассистентом).
Компоненты соответствуют макетам из ЛР17 (Figma).

## Стек

React 18 (функциональные компоненты, JSX, `useState`), Vite, PropTypes, CSS Modules.
Redux/MobX/Zustand и классовые компоненты не используются.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).
Сборка: `npm run build`, предпросмотр сборки: `npm run preview`.

## Структура

```
src/
├── assets/icons/        SVG-иконки и логотип из ЛР17
├── components/
│   ├── Icon/            SVG-иконка (цвет через currentColor)
│   ├── Button/          кнопка Primary / Secondary
│   ├── InputField/      поле ввода (Default / Focused / Error)
│   ├── FavoriteButton/  сердечко (Default / Active)
│   ├── PetCard/         карточка питомца
│   └── BottomNav/       нижняя навигация
├── App.jsx              демонстрационная страница
├── index.css            дизайн-токены (цвета, отступы, радиусы)
└── main.jsx
```

## Компоненты

| Компонент | Props | Локальное состояние (`useState`) |
|---|---|---|
| Button | `children`, `variant` (primary/secondary), `icon`, `fullWidth`, `disabled`, `onClick` | `state`: default / hover / pressed |
| InputField | `label`, `type`, `placeholder`, `required`, `onChange` | `value`, `focused`, `touched` |
| FavoriteButton | `initialActive`, `onToggle` | `active` |
| PetCard | `name`, `age`, `breed`, `description`, `urgent`, `onFavoriteChange` | `expanded` |
| BottomNav | `items`, `initialActive`, `onChange` | `activeId` |
| Icon | `name`, `size` | — |
