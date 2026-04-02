// Callback: passing a function name into another function as a parameter.
// calling a function by passing the function name.

console.log('====call back using arrow function=========');


let sum=(a,b) => a+b ; // arrow function.
let sub=(a,b) => a-b ; // arrow function.
let mult=(a,b) => a*b ; // arrow function.
let div=(a,b) => a/b ; // arrow function.


//Actual function:
function calculator(callbackFunction, a,b){   // passing function name (any), and params
console.log("Some mathematical operation happens!");
//business logic--
if (callbackFunction===sum) {
   console.log(`The sum of ${a} and ${b} :`);
    return callbackFunction(a,b);
}
else if (callbackFunction===sub) {
   console.log(`The sub of ${a} and ${b} :`);
    return callbackFunction(a,b); 
}
else if (callbackFunction===mult) {
   console.log(`The mult of ${a} and ${b} :`);
    return callbackFunction(a,b); 
}
else if(callbackFunction===div) {
   console.log(`The div of ${a} and ${b} :`);
    return callbackFunction(a,b); 
}

};

//calling the function:
let result = calculator(div,10,20); // passing function name and values (arguments)
console.log(result);

console.log('====call back using anonymous function=========');

let addition = function (a,b) {
    return a+b;
};

let substraction = function (a,b) {
    return a-b;
};

let multiplication = function (a,b) {
    return a*b;
};

let division = function (a,b) {
    return a/b;
};

//Actual function
function performOperation(a,b,CallbackFun){
  console.log('callback usung anonymous function: math operation using! '+CallbackFun.name); //business logic any
  return CallbackFun(a,b);
};

//user calling the function --> passing here the function name.
let res= performOperation(25,36,addition);
console.log(res);

// In.. 'callback usung anonymous function: math operation using! '+CallbackFun.name > give external name 
// if we use only CallbackFun, then it gives internal function with no name: function (a,b).

console.log('====call back with normal named function========');

function summing(a,b){
 return a+b;
};

//Actual function
function calci (callbacking, a,b){
    console.log('perform math calculation.');
    return callbacking(a,b);
    
}
//calling fun
let calculate = calci(summing,30,40);
console.log(calculate);

console.log('==============while designing the function, never create arrow/anonymous funion body===========');
//while designing the function, never create arrow/anonymous funion body

//Designing the function:

function doSomething(funNaming, url){ // Not creating the fun.
console.log('Entering the url as: '+url);

return funNaming();
};

//calling the function
// ====*** call by passing call back function *body* and url value.**** =====

doSomething( () =>{
console.log('Hello app');

},'https://www.google.com');
    

//  Here understand this  : funNaming() = () =>{
// console.log('Hello app');
// }


