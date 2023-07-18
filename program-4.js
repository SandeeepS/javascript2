//Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).

const prompt = require("prompt-sync")();
var mark = prompt("enter your mark: ","");
if(mark>=50 && mark<= 100){
    console.log("passed");
}
else{
    console.log("failed");
}
