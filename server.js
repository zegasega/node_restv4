const app = require('./app');
const sequelize = require('./config/database');
const User = require('./models/user');

const PORT = 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('DB bağlantısı başarılı.');

    await sequelize.sync({ force: false }); // force: true -> tabloları siler

    app.listen(PORT, () => {
      console.log(`Sunucu ${PORT} portunda çalışıyor.`);
    });
  } catch (err) {
    console.error('Sunucu başlatılamadı:', err);
  }
}

startServer();
