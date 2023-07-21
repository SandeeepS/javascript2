const globelplayar ={
        id : 1,
        name : "sandeep ",
        powerlevel : 100
}
const plyar1 = {...globelplayar};
console.log(plyar1);
plyar1.powerlevel=50;
console.log(plyar1.powerlevel);
console.log(globelplayar.powerlevel);
