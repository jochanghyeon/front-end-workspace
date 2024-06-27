const userId = document.querySelector("#userId");
const userIdspan = document.querySelector("#userIdspan");

userId.addEventListener("input", function () {
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{4,12}$/;
  const check = regExp.test(userId.value);
  if (check) {
    userIdspan.style.color = "green";
    userIdspan.innerHTML = "OK!";
  } else {
    userIdspan.style.color = "red";
    userIdspan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});
const userPwd = document.querySelector("#userPwd");
const userPwdspan = document.querySelector("#userPwdspan");

userPwd.addEventListener("input", function () {
  const regExp = /^[!-~]{4,12}$/;
  const check = regExp.test(userPwd.value);
  if (check) {
    userPwdspan.style.color = "green";
    userPwdspan.innerHTML = "OK!";
  } else {
    userPwdspan.style.color = "red";
    userPwdspan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});

const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckspan = document.querySelector("#userPwdCheckspan");

userPwdCheck.addEventListener("input", function () {
  console.log(userPwdCheckspan);
  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckspan.style.color = "green";
    userPwdCheckspan.innerHTML = "일치";
  } else {
    userPwdCheckspan.style.color = "red";
    userPwdCheckspan.innerHTML = "일치하지 않습니다";
  }
});
const userName = document.querySelector("#userName");
const userNamespan = document.querySelector("#userNamespan");

userName.addEventListener("input", function () {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(userName.value);
  if (check) {
    userNamespan.style.color = "green";
    userNamespan.innerHTML = "OK!";
  } else {
    userNamespan.style.color = "red";
    userNamespan.innerHTML = "No!";
  }
});
const usereMail = document.querySelector("#usereMail");
const usereMailspan = document.querySelector("#usereMailspan");

usereMail.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(usereMail.value);

  if (check) {
    usereMailspan.style.color = "green";
    usereMailspan.innerHTML = "OK!";
  } else {
    usereMailspan.style.color = "red";
    usereMailspan.innerHTML = "No!";
  }
});
