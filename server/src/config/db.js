const mongoose = require('mongoose');

// Подключение к MongoDB. Строка подключения берётся из .env (MONGODB_URI)
async function connectDB(uri) {
  if (!uri) {
    throw new Error('Не задана переменная MONGODB_URI в файле .env');
  }

  // если база недоступна, запрос завершится ошибкой 500 через 5 секунд, а не через 30
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  console.log(`MongoDB подключена: ${mongoose.connection.host}/${mongoose.connection.name}`);
}

module.exports = connectDB;
