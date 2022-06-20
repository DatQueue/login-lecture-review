"use strict";

const express = require("express");
const app = express();

//Routing 등록
const home = require("../app/src/routes/home/index");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
