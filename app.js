const express = require('express')
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./src/utils/database.js')
const { initializeRedis } = require('./src/middlewares/redis.js');
const tableRoutes = require('./src/routes/table.js');
const initializeRedisClient = require('./src/middlewares/redis.js');

const app = express();
app.use(cors());

sequelize
  .sync()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
});

async function initializeRedisServer() {
  try{
    await initializeRedisClient();
    console.log('Redis Server initialization complete')
  }
  catch(error) {
    console.log('Redis Server initialization error ', error)
  }
}

app.use('/api/table', tableRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Hello Get</h1>');
});

initializeRedisServer();

const PORT = process.env.DB_NAME_PORT || 4000

app.listen((PORT), () => {console.log("app is running at port 4000")});
