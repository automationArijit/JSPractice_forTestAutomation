console.log(10==10); //true

//if condition:
let a=10;
let b=20;
if (a>b) {
    console.log('Pass Case');
} else {
    console.log('Fail Case');
}

// Dead code or Unreachanbe code:
if (true) {
    console.log('Hi');
    
} else {
    console.log('Hello'); // Prog will never come to the else part.
}  

if (false) {
    console.log('Hola'); // Prog will never come to the else part.
    
} else {
    console.log('Namaste'); 
} 

console.log('==============');

let isElementDisplayed =true;

if (isElementDisplayed) {

    console.log('Click on the element');
      
} else {
    
    console.log('Wait for the element');
    
}

console.log('=======Comparision between == and === =======');

//Comparision between == and === 
// == -->> just check the values [loose equality]
// === ---> chek the value + data type [strict equality]

console.log('10'== 10); //true -->double equals
console.log('10'===10); //false --> triple equals.
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); //true
console.log(false === 0); //false

console.log('======= =======');

console.log('' == 0); //true
console.log('' === 0); //false

console.log('======= =======');

console.log([] == 0); //true
//console.log([] === 0); //false

console.log('======= Imp for asking =======');

console.log(null == undefined); //true
console.log(null === undefined); //false ---> null type is object and undefined is simply undefined.

console.log(typeof(true)); //boolean
console.log(typeof(null)); // object
console.log(typeof(undefined)); //undefined
console.log(typeof(5)); // number
console.log(typeof('a')); //string

console.log('=======  =======');

if (null == undefined) //condition satisfied so, it comes inside the block.
{
    console.log('Click on the element');
   
}

