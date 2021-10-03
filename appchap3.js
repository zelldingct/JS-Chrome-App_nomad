const title = document.getElementById("title");

console.dir(title);
console.log(title.id);
console.log(title.className);
title.innerHTML = "Got you!";

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title2 = document.querySelector(".hello h1");
