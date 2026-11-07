# Лапки — стилизация на MUI (ЛР № 6)

React-приложение «Лапки» из ЛР № 5 (Redux Toolkit), переведённое на библиотеку компонентов **MUI (Material UI)**. Свои компоненты кнопок, полей ввода, карточек и навигации заменены на компоненты MUI, макет страницы построен на сетке `Grid` и адаптирован под мобильный, планшет и десктоп. Избранное по-прежнему хранится в Redux.

## Стек

React 18, Vite, MUI 5 (`@mui/material`, `@mui/icons-material`, Emotion), Redux Toolkit, React Redux, PropTypes.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).

Сборка для продакшена:

```bash
npm run build
npm run preview
```

## Адаптивность

| Экран | Ширина | Каталог | Навигация |
|---|---|---|---|
| Мобильный | < 600 px (`xs`) | 1 колонка | нижняя `BottomNavigation` |
| Планшет | 600–899 px (`sm`) | 2 колонки | нижняя `BottomNavigation` |
| Десктоп | ≥ 900 px (`md`) | 3 колонки | вкладки `Tabs` в шапке |

## Замена компонентов

| Было (ЛР № 5) | Стало (MUI) |
|---|---|
| `Button` | `Button` (`contained`, `outlined`, `disabled`, `endIcon`) |
| `InputField` | `TextField` с `error` и `helperText` |
| `PetCard` | `Card`, `CardMedia`, `CardContent`, `CardActions`, `Chip` |
| `FavoriteButton` | `IconButton` + `Tooltip` |
| `FavoritesBadge` | `Badge` |
| `Favorites` | `Card`, `CardHeader`, `List`, `ListItem` |
| `BottomNav` | `BottomNavigation`, `BottomNavigationAction` |
| `Icon` (свои SVG) | `@mui/icons-material` |
| CSS Modules | тема `createTheme` и проп `sx` |

