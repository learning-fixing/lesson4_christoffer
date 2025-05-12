let myName = "Philip"; //String
let age = 34; //My age
const isPerson = true; //Boolean value

myName = "Jadetorp"

console.log( "Hej, jag heter "+ myName + ", jag är " + age + " år");
console.log("Philip är: " + isPerson);

if (myName === "Jadetorp" ) {
console.log("Hej Jadetorp")
} else {
    console.log("Du heter inte Jadetorp");
}
if (age >= 35) {
    console.log ("Ung i hjärtat")
} else if (myName === "Jadetorp" && age === 34) { //
    console.log("Your name is Jadetorp and you are 34 years old");
}
// is A larger than B?
let a = 10;
let b = 20;

if (a > b) {
    console.log("A is bigger than B");
} else {
    console.log("A is NOT bigger than B")
}
// is a equal to b?
a = "apple"
b = "pear"
if (a == b) {
    console.log("A is equal to B")
} else {
    console.log("A is NOT equal to B")
}
// prompt age, no meaning for input!!
// const number = prompt('Skriv in din ålder?')

// Receive two numbers, print which one that was entered is the largest one!!
// const number1 = Number(prompt("First number"));
// const number2 = Number(prompt("Second number"));

// if (number1 > number2) {
//     console.log("Number 1 is bigger than Number 2");
// }   else if (number1 < number2) {
//     console.log("Number 2 is bigger than Number 1")
// }
// is number even or odd !!
let numberEvenOdd = 10;
    if (numberEvenOdd % 2 == 0) {
    console.log("Number is fucking EVEN");
} else {
    console.log("Number is fucking ODD");
}

// const oddEven = Number(prompt("Type a number:"));
//     if (oddEven % 2 == 0) {
//         console.log("Number is mother fuckign EVEN")
//     }   else {
//         console.log("Number is NOT mother fucking even, like I mean fo'sho it's UN-EVEN")
//     }

// Roller coaster minimum height 150 CM, prompt

// const height = Number(prompt("Type your height in CM:"));
//     if (height >= 150) {
//         console.log("Your true height is 150 or above");
//     }   else {
//         console.log("your height is below 150, so it's false");
//     }

// True or false ride
// const height1 = Number(prompt("How tall are you in CM?"));
// const canride = height1 >= 150;
// console.log(canride);

// Four types, Small, Medium, Large, Platinum. Large and platinum allows you to go on the roller coaster
let small = false;
let medium = false;
let large = true;
let platinum = true;

if (large || platinum) {
    console.log("You are allowed to go on the Roller Coaster")
}   else {
    console.log("Buy a new pass")
} 

//  BMI Calculator !!
// prompt for weight and heightM
const weight = Number(prompt("Enter your weight in KG"))
const heightM = Number(prompt("Enter your height in M e.g. M.CM"))

     // calc BMI
let bmi = weight / (heightM * heightM);

console.log("Your BMI is " + Math.floor(bmi));

if (bmi < 18.5) {
         console.log("You are under nourished")
 }  else if (bmi >= 18.5 && bmi <=  25){
         console.log("You have a normal weight")
 }   else if (bmi >= 25.1 && bmi <= 29.9) {
         console.log("You are overweight")
 }   else if (bmi >= 30) {
          console.log("You are morbidly obese")
 }


// //HOW TO DO A FUNCTION
function add(n1, n2) {
    console.log("Add")
    console.log("nummer1 är", n1)
    console.log("nummer2 är", n2)
    let sum = n1 + n2;
    console.log("summan blir: " + sum)
}
function subtract(n1, n2) {
    console.log("Subtract")
    console.log("nummer1 är", n1)
    console.log("nummer2 är", n2)
    let sum = n1 - n2;

    console.log("summan blir: " + sum)
}

let operator = "subtract";

if (operator === "subtract") {
    subtract(40, 70);
}   else if (operator === add) {
    add (40, 70);
}

//christoffer's code
const inputNumberOne = Number(prompt("Välj första nummer"));
console.log("Första nummer 1: ", inputNumberOne);
const inputOperator = prompt("Välj addering (+) eller subtrahering (-)");
console.log("Operator:", inputOperator);
const inputNumberTwo = Number(prompt("Välj andra nummer"));
console.log("Andra nummer 2: ", inputNumberTwo);
 
if (inputOperator === "+") {
  add(inputNumberOne, inputNumberTwo);
} else if (inputOperator === "-") {
  subtract(inputNumberOne, inputNumberTwo);
}

// add(5, 19); //value from n1 and n2
// add(20, 20)

