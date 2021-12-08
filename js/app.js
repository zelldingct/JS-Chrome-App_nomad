const loginForm = document.getElementById("login-form");

//const loginInput = loginForm.querySelector("input");
//const loginInput = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); //위 아래 동일
const greeting = document.querySelector("#greeting");
const Hidden_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(Hidden_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(Hidden_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(Hidden_CLASSNAME);

  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}
const link = document.querySelector("a");

link.addEventListener("click", handleLinkClick);

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}
