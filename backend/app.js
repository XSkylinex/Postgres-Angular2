
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const userRoute = require('./routes/user');

const app = express();

const db = require("./models");
db.sequelize.sync();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRoute)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


module.exports = app;
