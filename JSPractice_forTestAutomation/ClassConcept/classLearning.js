// class name can any, file name can any:
//No constructor overloading is there...only one constructor with constructor keyword. 
// here constructor taking 2 variables/params.
// ** constructor will be called when we create object of the class.
//**  'this.' means --->> pointing to the current class object.
//** when a function is created with out a class==> is called function.
// ** when a function is created inside a class==> is called method.


class Person{

    constructor(name,age){
      this.name=name;
      this.age=age;
    }
    // "function" -- keyword is not allowed inside the class to create function.
    /**
     * 
     * @param {Number} speed 
     */
    drive(speed){ //---Normal function with param.
     console.log(`${this.name} is driving at a speed of ${speed} km/hr`);
     
    }

    getAdress(){  //---Normal function with no param.
        return 'Kolkata,India'
    }
    walking = function (){ //---anonymous function. ** Have to give any name or else how to call the function!! so giving name as: walking.
     
        console.log(`${this.name} is walking`);
    }
    getInfo = ()=>{
       console.log('Some information....');
       
    }

}
// Creating the object of the class with new keyword... immmidiately the constructor will call.

let p1 = new Person('Mohan',30); //--> have referance, so not eligible for GC.
console.log(p1.age); //30
console.log(p1.name); //Mohan
console.log(p1); //Person { name: 'Mohan', age: 30 }
p1.drive(40); //Mohan is driving at a speed of 40 km/hr
let address = p1.getAdress();
console.log(address); //Kolkata,India
p1.walking(); //Mohan is walking
p1.getInfo();

console.log('======================================================================');

//Here we not use constructor, so no nedd to pass argument while calling the class, by making its object.
// Using: static variable/method here.

class Learning { 

static Timeout = 10; //Static variable, stored in CMA (common memory allocation), have only one copy.

static readExcelData(){
console.log('Fetching the data from excel.'); //Static method, stored in CMA (common memory allocation) ,have only one copy.

}

writeData(){ // NS method, can be access only by referance variable, stored inside the heap memory, Have n no of copy.
    console.log('Writing the data..'); // if we create 100 object, then 100 copy of NS is given to each object.
}

}
let learn = new Learning();

learn.writeData(); //Writing the data..
console.log(Learning.Timeout); // 10 ---->>  className.variablename
Learning.readExcelData(); //  ---->>  className.methodName
// **static can be created only inside the class**


















//Creating onother object of person class, but not passing any arguments
// Two objects got created inside the heap memory...
 let p2 = new Person();  //--> have referance, so not eligible for GC.
 console.log(p2.age); //undefined
console.log(p2.name); //undefined
console.log(p2); //Person { name: undefined, age: undefined }

//  new Person(); --> have no referance, so eligible for GC.




