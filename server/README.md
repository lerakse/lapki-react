# Лапки API — Express + MongoDB (ЛР № 8)

REST API приюта «Лапки» на Node.js, Express и MongoDB (Mongoose). Реализует CRUD-операции для основной сущности проекта — питомца (`Pet`). API будет источником данных для клиентского приложения на Next.js из ЛР № 7.

## Стек

Node.js 20+, Express 5, Mongoose 9, dotenv, cors, nodemon (для разработки).

## Установка и запуск

1. Установить зависимости:

   ```bash
   cd server
   npm install
   ```

2. Создать файл `.env` по образцу `.env.example`:

   ```bash
   cp .env.example .env
   ```

   | Переменная | Значение по умолчанию | Назначение |
   |---|---|---|
   | `PORT` | `4000` | порт сервера |
   | `MONGODB_URI` | `mongodb://127.0.0.1:27017/lapki` | строка подключения к MongoDB |

   Для MongoDB Atlas в `MONGODB_URI` указывается строка подключения кластера (`mongodb+srv://...`).

3. Запустить MongoDB. Локально через Docker:

   ```bash
   docker run -d --name lapki-mongo -p 27017:27017 -v lapki-mongo-data:/data/db mongo:8
   ```

4. Заполнить базу питомцами из клиентского приложения (необязательно):

   ```bash
   npm run seed
   ```

5. Запустить сервер:

   ```bash
   npm run dev
   ```

   Режим разработки с автоперезапуском через nodemon. Без nodemon: `npm start`. Сервер работает на http://localhost:4000.

## Модель `Pet`

Схема в `src/models/Pet.js`. Поля `createdAt` и `updatedAt` добавляются автоматически (`timestamps: true`).

| Поле | Тип | Валидация и значение по умолчанию |
|---|---|---|
| `name` | String | обязательное, до 50 символов |
| `species` | String | обязательное, `cat` или `dog` |
| `age` | Number | обязательное, от 0 до 30 |
| `description` | String | обязательное, до 300 символов |
| `story` | String | по умолчанию `""` |
| `traits` | [String] | по умолчанию `[]` |
| `photo` | String | по умолчанию `null` |
| `urgent` | Boolean | по умолчанию `false` |

## Эндпоинты

| Метод | URL | Назначение | Успех | Ошибки |
|---|---|---|---|---|
| GET | `/api/pets` | список всех питомцев | 200 | 500 |
| GET | `/api/pets/:id` | один питомец по id | 200 | 400, 404, 500 |
| POST | `/api/pets` | создать питомца | 201 | 400, 500 |
| PUT | `/api/pets/:id` | обновить питомца | 200 | 400, 404, 500 |
| DELETE | `/api/pets/:id` | удалить питомца | 200 | 400, 404, 500 |

- **400** — ошибка валидации, некорректный id или некорректный JSON;
- **404** — питомца с таким id нет;
- **500** — ошибка сервера, например недоступна база данных.

Пример создания питомца:

```bash
curl -X POST http://localhost:4000/api/pets \
  -H "Content-Type: application/json" \
  -d '{"name": "Пушок", "species": "cat", "age": 1, "description": "Котёнок, 1 год. Игривый, приучен к лотку."}'
```

Ответ `201 Created` содержит созданный документ с `_id`, `createdAt` и `updatedAt`. При ошибке валидации возвращается `400` и сообщения по каждому полю:

```json
{
  "message": "Ошибка валидации",
  "errors": {
    "species": "Вид питомца: cat или dog",
    "age": "Возраст не может быть отрицательным"
  }
}
```

## Postman

Коллекция со всеми запросами: `postman/lapki-api.postman_collection.json` (Import → File). Переменная `baseUrl` — адрес сервера, `petId` — id питомца для запросов по id.

## Структура

```
server/
  .env.example             пример настроек
  postman/                 коллекция запросов Postman
  src/
    index.js               точка входа: dotenv, подключение к БД, запуск сервера
    app.js                 Express-приложение, middleware, обработка ошибок
    config/db.js           подключение к MongoDB через Mongoose
    models/Pet.js          схема и модель питомца
    controllers/           CRUD-логика (async/await, try...catch)
    routes/petRoutes.js    маршруты /api/pets
    seed.js                заполнение базы тестовыми данными
```
