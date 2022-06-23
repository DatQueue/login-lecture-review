"use strict";

const id = document.querySelector("#id");
const psWord = document.querySelector("#psWord");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", () => {
  login();
});

let login = () => {
  const req = {
    id: id.value,
    psWord: psWord.value,
  };
  console.log(req);
};
