//Arrow function: '=>' no function name, means anonymous function.
// No need to write function keyword also.
// store it in external variable to call.

let print= () => {
  console.log('I am arrow function !!');
  
}
print();
//For single line, no need for {}
let play= ()=> console.log('I am playwright');
play();

console.log('================================');


// arrow function with one param: can use (), for single line no need to write retuen.No need {}
let check= (number) => number%2===0; //return boolean
let s1=check(20);
console.log(s1);

console.log('=============arrow function with one param: without use ()===================');

let val= num => num*2;
let s2 =val(10);
console.log(s2); //20

console.log('=============arrow function with two params===================');

let sub = (a,b) => a -b; // Here () is mandatory: have 2 params
let minus= sub(10,20);
console.log(minus); //-10

console.log('-----------');

let lup = e =>console.log(e);
lup('holaa'); //holaa

console.log('-----------');
//External name (variable): openbrowser
//Internam name: No name, thats why anonymous function
// parameter: 1 = browserName , no need () , its optional.
// return: true/false.
/**
 * 
 * @param {string} browserName 
 */
let openbrowser = browserName => {
 
    switch (browserName.trim().toLocaleLowerCase()) {
        case 'chrome': console.log('launch chrome');
        return true;
          
        default:console.log('invalid browser!')
        return false;   
    }
}
let bool= openbrowser('chrome');
console.log(bool); //launch chrome --> if not pass chrome , it comes to default.


console.log('-------------------------------------');

let checking = (envName, version)=>{
console.log(envName);
console.log(version);
return 0;
}
let k= checking('qa',15.236);
console.log(k); //0









