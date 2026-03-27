//Post increment:
console.log('=====Post increment:======');

let a=10;
let b=a++;
//Here : 1st give the value of a to b immidiately, then increase the value of a.
console.log(a); //11
console.log(b); //10

let am=-5;
let bm=am++;

console.log(am); //-4
console.log(bm); //-5

//Pre increment:
console.log('=====Pre increment:======');
let m= -15;
let n= ++m;
//Here: 1st update the value the give the updated value.
console.log(m); // -14
console.log(n); // -14

let x=999;
let y=++x;
console.log(x); //1000
console.log(y); //1000

console.log('=====Post decrement:======');

let xa=16;
let xb=xa--;
console.log(xa); //15
console.log(xb); //16

let a1=18;
let b1= --a1;

console.log(a1); //17
console.log(b1); //17

let a2= 11;
let b2= 22;
let c2= a2+b2+a2++ + b2++ + ++a2 + ++b2;

console.log(a2); // 13
console.log(b2); // 24
console.log(c2); //103

console.log('======================'); 

let s=0;
let u= s++ - --s + ++s - s--;

console.log(s); // 0
console.log(u); // 0

console.log('======================');

let m1=0;
let n1=0;
let p1= --m1* --n1 * n1-- * m1--;

console.log(m1); // -2
console.log(n1); // -2
console.log(p1); // 1

console.log('======================');

let d=1.5; //2.5
let e=2.5; //3.5
let res= d++ + ++e; // 1.5 + 3.5 = 5

console.log(d); // 2.5
console.log(e); // 3.5
console.log(res); // 5









