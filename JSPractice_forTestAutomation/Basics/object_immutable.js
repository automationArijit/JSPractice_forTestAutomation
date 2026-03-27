//Immutable object: freeze vs seal
// freeze : cant change any thing. Like final .Makes the obj immutable.
// seal : modification possible for existing property, but no add/delete.
// Watch : 1.10 min

let user = {

    name:'Ram',
    age:25,
    branch:'CE'
}; //creating an object

//Making it immutable: freeze
Object.freeze(user);

//user.age=30;
//console.log(user); //Cannot assign -----> Error will come. 

//Creating another obj:

let product ={

    name:'maggie',
    type: 'fastfood',
    isActive: true,

};
console.log(product); //{ name: 'maggie', type: 'fastfood', isActive: true }

//Appplying Seal() --> Still can modify existing prop.
Object.seal(product);

product.name ='momo';
product.type='junkfood';

console.log(product); //{ name: 'momo', type: 'junkfood', isActive: true }

//Try to add prop, after seal():
//product.cooktime = 10;
//console.log(product); //Cannot add property cooktime, object is not extensible --error
//delete product.type;  // Cannot delete property 'type'
