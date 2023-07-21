const prompt = require("prompt-sync")();
var value = parseInt(prompt("enter a number ",""));
var flag = 0;
if(value==0||value==1){
    flag = 0;
   
}

for(var i = 2;i<value/2;++i){
    if(value%i===0){
        console.log("checked");
        flag = 1;
        
        break;
    }
}
     
  

if(flag == 1){
    console.log("the given number is not prime");
}
else
{
    console.log("the given number is not prime");
}
