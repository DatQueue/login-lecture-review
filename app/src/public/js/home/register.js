"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const psWord = document.querySelector("#psWord");
const confirmPsWord = document.querySelector("#confirm-psWord");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitRegister();
});

let register = async () => {
  const ifIdBlankMsg = "아이디를 작성해주세요.";
  const ifNameBlankMsg = "이름을 작성해주세요.";
  const ifPsWordBlankMsg = "비밀번호를 작성해주세요.";
  const psWordConfirmFailedMsg = "비밀번호가 일치하지 않습니다.";
  if (!id.value) {
    return alert(ifIdBlankMsg);
  }
  if (!name.value) {
    return alert(ifNameBlankMsg);
  }
  if (!psWord.value) {
    return alert(ifPsWordBlankMsg);
  }
  if (psWord.value !== confirmPsWord.value) {
    return alert(psWordConfirmFailedMsg);
  }

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
  const registerInfo = await res.json();
  return registerInfo;
};

let submitRegister = () => {
  register().then((registerInfo) => {
    if (registerInfo.success) {
      location.href = "/login";
    } else {
      alert(registerInfo.msg);
    }
  });
};
