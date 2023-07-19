const prompt = require("prompt-sync")();
// Get the dimensions of the array from the user
const rows = parseInt(prompt("Enter the number of rows:"));
const cols = parseInt(prompt("Enter the number of columns:"));

// Create an empty array to store user input
const array1 = [];
const array2 = [];

// Loop to populate the array1 with user input
for (let i = 0; i < rows; i++) {
  array1[i] = [];
  for (let j = 0; j < cols; j++) {
    array1[i][j] = parseInt(prompt(`Enter the value for array[${i}][${j}]:`));
  }
}

for (let i = 0; i < rows; i++) {
    array2[i] = [];
    for (let j = 0; j < cols; j++) {
      array2[i][j] = parseInt(prompt(`Enter the value for array[${i}][${j}]:`));
    }
  }

console.log(array1);
console.log(array2);

const arry3 = [];
for(i=0 ;i<rows;i++){
    arry3[i]=[];
    for(j=0;j<cols;j++){
        arry3[i][j] = array1[i][j] + array2[i][j];
    }
}
console.log("resultant array is");
console.log(arry3);
