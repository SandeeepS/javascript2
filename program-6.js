//. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 

const prompt = require("prompt-sync")();

var choice = prompt("enter the number between 0 and 8","");
switch(parseInt(choice)){
    case 1 :
        console.log("monday");
         break;

    case 2 :
        console.log("tuesday");
        break;

    case 3 :
        console.log("wedday");
            break;
    case 4 :
        console.log("thur");
        break;
    case 5 :
        console.log("fri");
        break;
    default :
        console.log("enter valid input ");
        break;

}