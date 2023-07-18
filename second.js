//accept two input from the user and display it sum 
const prompt = require("prompt-sync")();
var num1 = prompt("enter the integer number :","");
var num2 = prompt("enter the floating point  number: ","");
var result = parseInt(num1) + parseFloat(num2);
console.log(result);