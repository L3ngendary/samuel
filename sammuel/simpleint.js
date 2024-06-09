
//SIMPLE INTEREST CALCULATOR

let principal = parseFloat(prompt("Enter the principal amount:"));
let annualInterestRate = parseFloat(prompt("Enter the annual interest rate (in %):"));
let timeInYears = parseFloat(prompt("Enter the time period in years:"));

let simpleInterest = (principal * annualInterestRate * timeInYears) / 100;


alert("The simple interest is: " + simpleInterest.toFixed(2));


calculateSimpleInterest();

