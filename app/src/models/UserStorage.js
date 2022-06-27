"use strict";

class UserStorage {
  static #users = {
    id: ["Nemoo", "Yeesisi", "Keeming"],
    psWord: ["1234", "12345", "123456"],
    name: ["Daegyu", "SiHyun", "Yurim"],
  };

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
