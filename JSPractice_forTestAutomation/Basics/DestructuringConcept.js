//  Destructuring: extracting the values from array/ object then assign them in to a variable.

let products =['mackbook','iphone','ipad'];
let[a,b,c] =products;

console.log(a); //mackbook
console.log(b); //iphone
console.log(c); //ipad

console.log('--------------------------');


let[first, ,third] = products;

console.log(first); //mackbook
console.log(third); //ipad

console.log('--------------------------');

let[x = 'sim',y,z,p='mouse'] = products;

console.log(x); //mackbook ---> sim is default value, it is replaced by mackbook
console.log(y); //iphone
console.log(z); //ipad
console.log(p); //mouse ---> we give default value as mouse, if not provide, return =undefined.


console.log('--------------------------');

let login =['admin','admin123'];
let [userN='Hello', Pass] =login;
console.log(userN); //admin

console.log('--------------------------');

let nums =[1,2,3,4,5,6];
let [head, ...tail] =nums
console.log(head); //1
console.log(tail); // [2,3,4,5,6]


console.log('--------------  Destructuring of objects  ------------');

let employee ={
    name:'Rahul',
    age:30,
    salary: 58.23,
    isActive :true,
};

//Ley must be on same name / have to use this style:
let {name:Empname, age:Empage, salary:Empsalary, city='Kolkata'} = employee;

console.log(Empname); //Rahul
console.log(Empage); //30
console.log(Empsalary); // 58.23
console.log(city); //Kolkata


console.log('--------------  Destructuring: calling obj in function ------------');

let user ={
 
    name:'pradeep',
    age:30,
    city: 'pune',
    isActive: true,
}

// designing function
function getinfo( {name,age} ){ // fetching particular property from obj
console.log(name);
console.log(age);
}

function getDetails( {city,isActive} ){ // fetching particular property from obj
 console.log(city);
 console.log(isActive);
}

//calling the function, and passing obj reference:

 getinfo(user); // passing entire obj - gives ----pradeep 30.
  getDetails(user); // passing entire obj  gives ----pune true.


