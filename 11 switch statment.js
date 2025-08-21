let day = "Monday";

switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thirsday":
    case "Friday":
        console.log("Working day")
        break;

    case "Saterday":
        console.log("Working Day in Home")
        break;

    default:
        console.log("HolyDay")
}
    





//====== Caculator ========
// Take input from user
let num1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number:"));

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    if (num2 === 0) {
      result = "Error: Division by zero!";
    } else {
      result = num1 / num2;
    }
    break;

  default:
    result = "Invalid operator!";
}

console.log("Result:", result);
alert("Result: " + result);
