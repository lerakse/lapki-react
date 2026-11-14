require('dotenv').config({ quiet: true });
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Сервер запущен: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Не удалось запустить сервер:', error.message);
    process.exit(1);
  }
}

start();
