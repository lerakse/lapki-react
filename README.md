# Лапки — Next.js, SSR и SSG (ЛР № 7)

React-приложение «Лапки» из ЛР № 6 (MUI + Redux Toolkit), перенесённое на мета-фреймворк **Next.js** (Pages Router). Проект создан через `create-next-app`, компоненты из прошлых работ перенесены в `src/components`, маршруты строятся автоматически по файлам в `src/pages`. Две ключевые страницы используют разные стратегии рендеринга: главная — **SSR**, анкеты питомцев — **SSG**.

## Сервер API (ЛР № 8)

REST API на Express и MongoDB находится в папке [`server`](server). Установка, запуск и описание эндпоинтов — в [server/README.md](server/README.md).

## Стек

Next.js 16 (Pages Router), React 19, MUI 5 (`@mui/material`, `@mui/icons-material`, Emotion, `@mui/material-nextjs` для серверных стилей), Redux Toolkit, React Redux, PropTypes.

## Запуск

Нужен Node.js 20.9 или новее.

```bash
npm install
```

Режим разработки:

```bash
npm run dev
```

Сборка и запуск в production-режиме:

```bash
npm run build
npm run start
```

Приложение открывается на http://localhost:3000.

## Страницы и стратегии рендеринга

| Маршрут | Файл | Стратегия | Функция получения данных |
|---|---|---|---|
| `/` | `src/pages/index.jsx` | SSR — HTML собирается при каждом запросе | `getServerSideProps` |
| `/pets` | `src/pages/pets/index.jsx` | SSG — HTML собирается при `npm run build` | `getStaticProps` |
| `/pets/[id]` | `src/pages/pets/[id].jsx` | SSG для `/pets/1` … `/pets/6` | `getStaticPaths` + `getStaticProps` |
| `/ai`, `/donate` | `src/pages/ai.jsx`, `src/pages/donate.jsx` | статические страницы без данных | — |

Данные питомцев — mock-данные из `src/data/pets.js`, функции `getPets` и `getPetById` в `src/lib/pets.js` имитируют запрос к API приюта.

На каждой SSR/SSG-странице в заголовке есть метка режима и время рендеринга:

- на главной (`SSR`) время меняется при каждом обновлении страницы;
- на `/pets` и анкетах (`SSG`) всегда показано время сборки.

После `npm run build` в таблице маршрутов `/` помечен как `ƒ (Dynamic)`, `/pets` и `/pets/1…6` — как `● (SSG)`.

## Как проверить, что HTML приходит с сервера

1. Запустить `npm run build` и `npm run start`.
2. Открыть страницу и выбрать «Просмотр кода страницы» (`Ctrl+U`, на macOS `⌥⌘U`).
3. В исходном коде уже есть клички и описания питомцев, строка «сгенерировано на сервере: …» или «собрано при сборке: …», а в `__NEXT_DATA__` — признак `"gssp":true` (SSR) или `"gsp":true` (SSG).

## Навигация

Переходы между страницами сделаны через `next/link`: вкладки в шапке, нижняя навигация и кнопка «Смотреть анкету». Страница при переходе не перезагружается, поэтому избранное в Redux сохраняется.

## Тесты (ЛР № 9)

### Unit-тесты (Jest + React Testing Library)

Тесты лежат в папке `__tests__`:

| Файл | Что проверяет |
|---|---|
| `favoritesSlice.test.js` | редюсер избранного: добавление, удаление, очистка, селекторы |
| `FavoriteButton.test.jsx` | кнопка «сердечко» меняет состояние и Redux-store по клику |
| `AddPetForm.test.jsx` | форма новой анкеты отправляет данные и показывает ответ сервера (`createPet` замокан через `jest.mock`) |

Запуск:

```bash
npm test
```

## Структура

```
public/              фото питомцев, логотип, иконка сайта
src/
  components/        компоненты из ЛР № 6 + Layout, PageHeader, PetPhoto
  data/pets.js       mock-данные
  lib/               получение данных и форматирование даты
  pages/             файловый роутинг Next.js
    _app.jsx         Redux, тема MUI, общий макет
    _document.jsx    серверные стили Emotion, lang="ru"
    index.jsx        главная (SSR)
    pets/index.jsx   все питомцы (SSG)
    pets/[id].jsx    анкета питомца (SSG + getStaticPaths)
  store/             Redux Toolkit (избранное)
  theme.js           тема MUI, шрифты через next/font
```
