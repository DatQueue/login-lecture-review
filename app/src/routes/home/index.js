"use strict";

//라우터 따로 분리

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router;
