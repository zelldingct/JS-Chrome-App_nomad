console.log(452315);
console.log("힘들다");
const a = 5;
const b = "2";
let c = "가나다";
var d = "바사아";
c = "다라마";
console.log(c);
console.log(d);

const amIFat = true;
console.log(amIFat);
null; //아무것도 없다.
let something; //undefined

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const num = [1, 2, 3, 4, 5, 6, 7];
console.log(daysOfWeek);
console.log(daysOfWeek[5]);

//Get Item from Array
console.log(daysOfWeek[4]);

//Add one more day to the array
daysOfWeek.push("hi");
console.log(daysOfWeek);

//Object의 개념
const playerName = "nico";
const playerPonints = 1212;
const playerHandsome = true;
const playerFat = "little bit";

const player = ["nico", 1212, false, "little bit"];

const player1 = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player1);
console.log(player1.name);
player1.power = 10;
player1.points = player1.points + 10;
console.log(player1);
