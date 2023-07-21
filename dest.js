/*let arr = ["kerala","malayalam",10000];
let  [state,lang,pop]= arr;

console.log(state);
console.log(lang);
console.log(pop); */

//object destructuring

let obj1 = {
      p1 : "kerala",
      p2 : "malayalam",
      p3 : 10000
}
let {state,lang,pop} = obj1;
console.log(obj1.p1);
console.log(obj1.p2);
console.log(obj1.p3);
