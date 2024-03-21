const express = require('express')
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./utils/database.js')

const tableRoutes = require('./routes/table.js');

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

app.use('/api/table', tableRoutes);

const PORT = process.env.DB_NAME_PORT || 4000

app.listen((PORT), () => {console.log("app is running at port 4000")});