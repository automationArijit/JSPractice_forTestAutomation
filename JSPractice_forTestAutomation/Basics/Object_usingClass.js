//Creating Object using the class:
//Class is available in latest JS version: ES6
//We can ctreate only one constructor in JS.
//Always create obj with ref var, or GC will destroy this obj in heap.

class product{
 constructor(name,price)
 {
   this.name=name;
   this.price=price;
 }

}
let p= new product('mobile',200);
console.log(p.price); //200
console.log(p.name); //mobile

//update the property: adding
p.model='A type';
p.launchYear =2008;
console.log(p);  
// product {
//   name: 'mobile',
//   price: 200,
//   model: 'A type',
//   launchYear: 2008
// }

//update the property: deleting
delete p.price;
console.log(p); //product { name: 'mobile', model: 'A type', launchYear: 2008 } ---> price is deleted.

//** We can not see GC in JS: Bt, in java its possible: System.gc **



