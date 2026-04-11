// Here making price variable as private.
// In JS: to define private we have to use: #variable name/ #method name.
//Private: Must have to define at bigining of the class. 
// ** Encapsulation***

class Car {
    #price; 
    constructor(name, price){
     
        this.name=name;
        this.#price=price;
    }
    // public method
    knowPrice(){
    console.log(`The Price of the car is: ${this.#price} lakhs`);
    
    }
    //public greater method:
    getPrice(){
     return this.#price;
    }
     //public setter method:
    setPrice(price){
     this.#price=price;
    }

}
let c1 = new Car('Audi',45);
console.log(c1.name);
// We can not access variable directly:
console.log(c1.price); //undefined
//But this can be achive via indirect access.
c1.knowPrice();
c1.setPrice(30.5);
let NewPrice = c1.getPrice();
console.log(NewPrice); //30.5
