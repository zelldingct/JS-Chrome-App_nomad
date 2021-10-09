const aa = document.querySelector(".a");
const ab = document.getElementById("b");
const h1 = document.querySelector("b");
function handleTitleClick() {
  const currentColor = ab.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  ab.style.color = newColor;
}

ab.addEventListener("click", handleTitleClick);
