"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psWord = req.body.psWord;

    const users = UserStorage.getUsers("id", "psWord");
    const response = {};

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psWord[idx] === psWord) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "login failed!";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
