//
let u1 = {
name:'Aman',
age: 30,
isActive: true,
Branch:'ME'
};

console.log(u1); //{ name: 'Aman', age: 30, isActive: true, Branch: 'ME' }
console.log('----------------------------------------------');
let u2 = {
name:'Hema',
age: 32,
isActive: false,
Branch:'CSE'
};

let u3 = {
name:'Rahul',
age: 20,
isActive: true,
Branch:'IT'
};

u1=u2;
u2=u3;

console.log(u1); //{ name: 'Hema', age: 32, isActive: false, Branch: 'CSE' }
console.log(u2); //{ name: 'Rahul', age: 20, isActive: true, Branch: 'IT' }
console.log(u3); //{ name: 'Rahul', age: 20, isActive: true, Branch: 'IT' }

//Trick: for ulti obj ref comparision : always read left to right
console.log('----------------------------------------------');

u1=u2=u3; //So first pair: u2=u3 , second pair: u1=u2

console.log(u1); // { name: 'Rahul', age: 20, isActive: true, Branch: 'IT' }
console.log(u2); // { name: 'Rahul', age: 20, isActive: true, Branch: 'IT' }
console.log(u3); // { name: 'Rahul', age: 20, isActive: true, Branch: 'IT' }
