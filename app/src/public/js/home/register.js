"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const psWord = document.querySelector("#psWord");
const confirmPsWord = document.querySelector("#confirm-psWord");
const signUpBtn = document.querySelector("button");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitSignUp();
});

let signUp = async () => {
  const req = {
    id: id.value,
    name: name.value,
    psWord: psWord.value,
    confirmPsWord: confirmPsWord.value,
  };

  const res = await fetch("http://localhost:3000/register", {
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
  const signUpInfo = await res.json();
  return signUpInfo;
};

let submitSignUp = () => {
  signUp().then((signUpInfo) => {
    if (signUpInfo.success) {
      location.href = "/login";
    } else {
      alert(signUpInfo.msg);
    }
  });
};
