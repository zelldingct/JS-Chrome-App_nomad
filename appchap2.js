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

function sayhello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + "  I am  " + age);
}

sayhello("bruce", 10);
sayhello("jane"), 23;
sayhello();
//alert();

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}
plus(8, 7);

divide(6, 2);

const days = [1, 2, false, true, null, undefined, "text"];

console.log(days[2]);

const player3 = {
  name: "nico",
  age: 98,
};
player3.name = "abc";
player3.address = "seoul";
console.log(player3, console);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};
//과제
// calculator.add(4, 1);
// calculator.minus(4, 2);
// calculator.times(4, 2);
// calculator.divide(4, 2);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const plusResult = calculator.add(2, 3);
console.log(plusResult);

const test = prompt("How old are you?"); //prompt엄청 오래된 function임
console.log(test);

console.log(typeof test);

console.log(typeof "15", typeof parseInt("15"));

console.log(isNaN(test));

if (isNaN(test) || test < 0) {
  //condition==true
  console.log("please write a real positive number");
} else if (test < 18) {
  //condition==false
  console.log("you are too young.");
} else if (test >= 18 && test <= 50) {
  console.log("you can drink as much as you can");
} else if (test > 50) {
  console.log("you would rather not drink much");
} else {
  console.log("You can drink");
}
