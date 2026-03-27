//obj :
let user = {
    name:'Ram',
    age: 40
}
console.log(user); //{ name: 'Ram', age: 40 }

console.log('------copy of user---------');

let person = {...user}; //using spread operator
console.log(person); //{ name: 'Ram', age: 40 } //Here: 2 obj is creaed inside memory.

// One obj with multiple ref var:
console.log('------One obj with multiple ref var:---------');

let u1={
    name:'tom',
    age:20,
}

let u2=u1; // here no obj creation, only create a ref var u2.
console.log(u2); // { name: 'tom', age: 20 }

console.log('--------------------');

u2.name='harry';
console.log(u1); //{ name: 'harry', age: 20 }
console.log(u2); //{ name: 'harry', age: 20 }