const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for values of array1
rl.question('Enter values for array1 (comma-separated): ', (input1) => {
  const array1 = input1.split(',');

  
   var count=0;
    console.log('Array 1:', array1);
    for(i=0;i<array1.length-1;i++){
        for(j=i+1;j<array1.length;j++){
            if(array1[i]>array1[j]){
                var temp = array1[j];
                array1[j] = array1[i];
                array1[i] = temp;
            }
        }
    }
    console.log("array after sorting");
    console.log(array1);
   
    // Swap the values of array1 and array

    rl.close();
  });

