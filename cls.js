class bike{

    constructor(model_name,color,price){
        this.model_name = model_name;
        this.color      = color;
        this.price      = price;
        
    }

    bikeDetails(){
        console.log("bike :"+this.model_name);
        console.log("color :"+this.color);
        console.log("price :"+this.price);
    }
    showPrice(){

    }
}
//inheritance
class sportsbike extends bike{
    
}
let b1 = new bike("splendore","black",50000);
let sp1 = new sportsbike("Bajaj Dominar","green",265000);


console.log(b1.model_name);
sp1.bikeDetails();
