// Array constructor with single value behave different:

let ar= new Array(5);
console.log(ar); // [ <5 empty items> ]
console.log(ar.length); // 5

//With 2 value, it gives correct O/P

let arr = new Array(15,20);
console.log(arr);  //[ 15, 20 ]
console.log(arr.length); //2



