const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) {
    throw new Error('Не задана переменная MONGODB_URI в файле .env');
  }

  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  console.log(`MongoDB подключена: ${mongoose.connection.host}/${mongoose.connection.name}`);
}

module.exports = connectDB;
