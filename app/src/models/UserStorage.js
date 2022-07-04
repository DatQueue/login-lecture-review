"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.err(err));
  }

  static save(userInfo) {
    //const users = this.#users;
    users.id.push(userInfo.id);
    users.psWord.push(userInfo.psWord);
    users.name.push(userInfo.name);
    return { success: true };
  }
}

module.exports = UserStorage;
