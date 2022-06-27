"use strict";

const id = document.querySelector("#id");
const psWord = document.querySelector("#psWord");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", () => {
  submitLogin();
});

let login = async () => {
  const req = {
    id: id.value,
    psWord: psWord.value,
  };

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    const msg = `An error has occured : ${res.status}`;
    throw new Error(msg);
  }
  console.log(res.status);
  const loginInfo = await res.json();
  return loginInfo;
};

let submitLogin = () => {
  login().then((loginInfo) => {
    if (loginInfo.success) {
      location.href = "/";
    } else {
      alert(loginInfo.msg);
    }
  });
};
