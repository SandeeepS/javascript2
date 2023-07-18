//calculate simple intrest 

const prompt = require("prompt-sync")();
var principal_amount = prompt("enter the pricipal amount","");
var intrest_rate = prompt("enter the intrestrate","");
var number_of_years = prompt("enter the number of years","");
var simple_intrest = (principal_amount*number_of_years*intrest_rate)/100;
console.log("simple intrest is "+ simple_intrest);