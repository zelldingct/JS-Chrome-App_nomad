const title = document.getElementById("title");

console.dir(title);
console.log(wow.id);
console.log(wow.className);
wow.innerHTML = "Got you!";

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const abc = document.querySelector(".hello");

function handleTitleClick() {
  abc.innerText = "OMG";
}

function handlerMouseEnter() {
  abc.innerText = "mouse is here";
}

function handlerMouseLeave() {
  abc.innerText = "mouse is gone!";
}

function handleWindowCopy() {
  alert("Are you coping now?");
}

function handleWindowOffline() {
  alert("sos no WIFI");
}

function handleWindowOnline() {
  alert("connected WIFI");
}

abc.addEventListener("click", handleTitleClick);
abc.addEventListener("mouseenter", handlerMouseEnter);
abc.addEventListener("mouseleave", handlerMouseLeave);

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

console.dir(wow);
