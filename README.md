# Лапки — глобальное состояние на Redux Toolkit (ЛР № 5)

React-приложение «Лапки» из ЛР № 2, в которое добавлено глобальное хранилище на Redux Toolkit. Избранные питомцы хранятся в store, поэтому кнопка-сердечко в карточке, счётчик в шапке экрана и панель «Избранное» всегда показывают одинаковые данные, хотя напрямую друг с другом не связаны.

## Стек

React 18, Vite, Redux Toolkit (`@reduxjs/toolkit`), React Redux (`react-redux`), PropTypes, CSS Modules.

## Запуск

Нужен Node.js 18 или новее.

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).

## Структура

```
src/
├── store/
│   ├── index.js            настройка хранилища (configureStore)
│   └── favoritesSlice.js   срез favorites: состояние, редюсеры, действия, селекторы
├── data/pets.js            список питомцев
├── components/
│   ├── FavoriteButton/     сердечко: читает store (useSelector), меняет (useDispatch)
│   ├── FavoritesBadge/     счётчик избранного в шапке экрана
│   ├── Favorites/          панель избранного: список, «Убрать», «Очистить»
│   ├── PetCard/            карточка питомца
│   └── Button/, InputField/, BottomNav/, Icon/
├── App.jsx
└── main.jsx                <Provider store={store}>
```

## Срез favorites

Состояние: `{ ids: number[] }` – id питомцев в избранном.

| Действие | Что делает |
|---|---|
| `toggleFavorite(id)` | добавляет id или убирает, если он уже есть |
| `removeFavorite(id)` | убирает id из избранного |
| `clearFavorites()` | очищает избранное |

Селекторы: `selectFavoriteIds`, `selectFavoritesCount`, `selectIsFavorite(id)`.
