"use strict";

const express = require("express");
const app = express();

//Routing 등록
const home = require("./routes/home/index");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
