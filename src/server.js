const express = require('express');
const albumRoutes = require('./routes/albumRoutes');
const songRoutes = require('./routes/songRoutes');
const mikroORM = require('@mikro-orm/core');
const mikroOrmConfig = require('./config/mikro-orm.config');

const app = express();

// Парсим тело запросов в формате JSON
app.use(express.json());

// Подключаем маршруты
app.use('/api/albums', albumRoutes);
app.use('/api/songs', songRoutes);

// Стартуем сервер
async function start() {
  try {
    const orm = await mikroORM.init(mikroOrmConfig);
    app.locals.orm = orm; // Сохраняем orm в локальной переменной приложения

    // Подключаем сервер
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.error('Error initializing MikroORM:', error);
    process.exit(1);
  }
}

start();
