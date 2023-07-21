function sum(num1,num2,...nums){
    
    let result = 0;
    for(let x of nums){
        result += x;
    }
    console.log(num1+num2+result);
}
sum(10,20,30,60);
