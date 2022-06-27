"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, psWord } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && psWord === body.psWord) {
        return { success: true };
      } else {
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }
}

module.exports = User;
