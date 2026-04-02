//IIFE: Immediately invoked function expresssion.
// Can not invoke multiple times. Only one time.
//This does not support function expression, but if we want to return something then 
// we must have to store in some variable.
// frist write: (), then inside the bracket write anonymous function.EX:===


(function (){
 console.log('Restart the server!');
 
})(); //---> immidiately calling the function.

console.log('=============================================');


let newEmployee = (function (empName){
  console.log("the employee name is: "+empName); //the employee name is: santanu
  return empName.toUpperCase();
})('santanu');

console.log(newEmployee); //SANTANU


