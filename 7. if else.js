//================= Conditional statements ===========================


let century;

const birthyear = 1998

//---- if -------
if(birthyear >= 2000){
    century = 21;
    console.log(century)
}
else{
    century = 20;
    console.log(century)
}


//----- Nested if -----------
let userName = "Admin"
let password = "12345"

if (userName == "Admin"){
    if(password == "12345"){
        console.log("Login Successfully")
    }
    else{
        console.log("Wrong Password")
    }
}
else{
    console.log("wrong UserName")
}



//---- if else -------
let day = "Sunday"

if(day == "Sunday")
{
    console.log("Off day")
} 
else if(day == "Saterday")
{
    console.log("Off day")
}
else{
    console.log("working Day")
}



// Ternary operators 
// Inline If condition


//=================== Task Caclulator =====================
// Take input from user
let num1 = prompt("Enter first number:");
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = prompt("Enter second number:");

// Convert to numbers after validation
if (num1 === "" || operator === "" || num2 === "") {
  alert("Error: All fields are required!");
} 
else if (isNaN(num1) || isNaN(num2)) {
  alert("Error: Please enter valid numbers!");
} 
else if (parseFloat(num1) === 0 || parseFloat(num2) === 0) {
  alert("Error: Numbers cannot be 0!");
} 
else {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let result;

  if (operator === "+") {
    result = num1 + num2;
  } 
  else if (operator === "-") {
    result = num1 - num2;
  } 
  else if (operator === "*") {
    result = num1 * num2;
  } 
  else if (operator === "/") {
    if (num2 === 0) {
      result = "Error: Division by zero!";
    } else {
      result = num1 / num2;
    }
  } 
  else {
    result = "Invalid operator!";
  }

  console.log("Result:", result);
  alert("Result: " + result);
}
