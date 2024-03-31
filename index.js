function setValue(parms) {
  const input = document.querySelector("#result");
  input.value += parms;
}

function clearValue() {
  const input = document.querySelector("#result");
  input.value = "";
}

function clearLastValue() {
  const input = document.querySelector("#result");
  input.value = input.value.slice(0, -1);
}

function getResult() {
  const input = document.querySelector("#result");
  input.value = eval?.(`"use strict";(${input.value})`)
    ? eval?.(`"use strict";(${input.value})`)
    : "error";
}

function checkNumber() {
  const input = document.querySelector("#result");
  const regex = /[a-zA-Z @~`!#$^&_%]+/g;
  input.value = input.value.replace(regex, "");
}

document.querySelector("#title").innerHTML = "Calculator";
document.querySelector("#description").innerHTML = "Basic calculator";
