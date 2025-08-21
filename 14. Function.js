fullName("M","Saqib")
fullName("M","skdfds")
fullName("M","sdfsd")
fullName("KOkab","Alil")

//___________ 1. take some thing , Return nothing ____________
function fullName(fName,lName){
    console.log(fName + " " + lName)
}

//___________ 2. take some thing , Return somthing ____________
function returnfullName(fName,lName){
    return (fName + " " + lName)
}
console.log(returnfullName("PK ","Pakistan"))

//___________ 3. take nothing, Return somthing ____________
function ff(){
    return ("function is awain")
}
console.log(ff())

//___________ 4. take nothing , return nothing ____________
function myAlert(){
    alert("Pakistna zindab")
}
myAlert()



//============== Parametrize Function ====================
//1. function which takse some thing is called  parameterize funciton
//2. function whihc has  parameterse in round bracket  (,,)
//3. Max 3 parameter are allowed in funciton  

//Paramterize funciton ha
//is me 3  paramter han
function MakSecurityKey(firstpart,midPart,LastPart){
  console.log(firstpart+"_"+midPart+"_"+LastPart);
}
MakSecurityKey("ABC","12345","#");

//============ Calculator in 1 funciton =================

// // Calculator function
// function calculate(num1, operator, num2) {
//   if (num1 === "" || operator === "" || num2 === "") {
//     return "Error: All fields are required!";
//   }

//   if (isNaN(num1) || isNaN(num2)) {
//     return "Error: Please enter valid numbers!";
//   }

//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);

//   if (operator === "+") {
//     return num1 + num2;
//   } 
//   else if (operator === "-") {
//     return num1 - num2;
//   } 
//   else if (operator === "*") {
//     return num1 * num2;
//   } 
//   else if (operator === "/") {
//     if (num2 === 0) {
//       return "Error: Division by zero!";
//     }
//     return num1 / num2;
//   } 
//   else {
//     return "Invalid operator!";
//   }
// }

// // ----- Main Program -----
// let num1 = prompt("Enter first number:");
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = prompt("Enter second number:");

// let result = calculate(num1, operator, num2);

// console.log("Result:", result);
// alert("Result: " + result);





//================= Calculator ================
// more sepration
// --- Operation Functions ---
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

// --- Main Calculator Function ---
function calculate(num1, operator, num2) {
  if (num1 === "" || operator === "" || num2 === "") {
    return "Error: All fields are required!";
  }

  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Please enter valid numbers!";
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (operator === "+") {
    return add(num1, num2);
  } 
  else if (operator === "-") {
    return subtract(num1, num2);
  } 
  else if (operator === "*") {
    return multiply(num1, num2);
  } 
  else if (operator === "/") {
    return divide(num1, num2);
  } 
  else {
    return "Invalid operator!";
  }
}

// --- Program Execution ---
let num1 = prompt("Enter first number:");
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = prompt("Enter second number:");

let result = calculate(num1, operator, num2);

console.log("Result:", result);
alert("Result: " + result);





///========= will be done in  loop section ==========
//===================== Fectorial ===========================
// function factorial(n) {
//   if (n < 0) return "Factorial not defined for negative numbers";
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// let num = parseInt(prompt("Enter a number to find factorial:"));
// let result = factorial(num);

// console.log("Factorial of " + num + " is " + result);
// alert("Factorial of " + num + " is " + result);