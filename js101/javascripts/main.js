console.log("Hello beautiful.");

var today = "Monday";
console.log("What is today?", today);

const myName = "Nora";

let month = "July";
console.log("this month is", month);

let hoursInAYear = 24 * 365;
console.log("Hours in a year", hoursInAYear);

let minsInDecade = (hoursInAYear * 60) * 10;
console.log("minsInDecade", minsInDecade);

let age = 31;
let secondsInYear = hoursInAYear * 60 * 60;
let ageInSeconds = secondsInYear * age;
console.log(ageInSeconds);

let myShoppingList = ["fruit", "milk", "peanut butter", "avacado"];
console.log("the second item", myShoppingList[1]);

let newValue = "2" + 2;
console.log("what is the value", newValue);

let wiseAge = 45;
if (age . wiseAge) {
	console.log("You are very wise");
} else {
	console.log("You are too young to be wise.")
}

let phrase = "The quick brown fox jumps over the lazy dog.";
let phraseHolder = document.getElementById("phrase");
phraseHolder.innerHTML = phrase;

let myNumber = 2.3456686;
let shortNum = myNumber.toFixed(2);
console.log("shortNum", shortNum);