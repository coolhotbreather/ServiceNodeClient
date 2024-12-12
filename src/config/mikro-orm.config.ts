module.exports = {
  type: 'postgresql',      // Тип базы данных
  dbName: 'mydatabase',    // Имя базы данных
  user: 'myuser',          // Пользователь
  password: 'mypassword',  // Пароль
  entities: [
    require('./entities/AlbumEntity'),
    require('./entities/SongEntity')
  ],                       // Прописываем сущности
  migrations: {
    path: './migrations',   // Путь к миграциям
    pattern: /^[\w-]+\.[tj]s$/ // Паттерн для файлов миграций
  }
};
