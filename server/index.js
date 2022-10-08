require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");

const PORT = process.env.PORT || 8080;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server работает на порту ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
