//program to print multiplcation table ofg the given number 
const prompt = require("prompt-sync")();
var number = prompt("enter a number","");
for(i=1;i<=10;i++){
    var result = i*number;
    console.log(i +" X "+number+" = "+result);
}
