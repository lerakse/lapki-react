const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');

const app = express();

app.use(cors()); // клиент на Next.js работает на другом порту
app.use(express.json()); // разбор JSON в теле запроса

app.get('/', (req, res) => {
  res.json({ name: 'Lapki API', endpoints: ['/api/pets'] });
});

app.use('/api/pets', petRoutes);

// Неизвестный маршрут
app.use((req, res) => {
  res.status(404).json({ message: `Маршрут ${req.method} ${req.originalUrl} не найден` });
});

// Ошибки, которые не обработаны в контроллерах (например, некорректный JSON)
app.use((error, req, res, next) => {
  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Некорректный JSON в теле запроса' });
  }

  console.error(error);
  return res.status(500).json({ message: 'Ошибка сервера' });
});

module.exports = app;
