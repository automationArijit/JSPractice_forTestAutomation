// Function expression: storing a function inside a variable.

let fun = function test(){
    console.log('Its a test function!');
    
}
// Here: Internal name of function: test(), externam name: fun.Always call external name.
fun(); //Its a test function!
//test(); //Error --->> ReferenceError: test is not defined
console.log('-------------to know: internal function name ---------');

// know original name:
console.log(fun.name); // test

// ** simple function: can be hoisted.(calling the function before declearing it) **
//*** function expression : never hoisted. ***

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
let add = function addTwoNumber(a,b){ // params.
   let sum=a+b;
   console.log('The sum of two number is: '+(a+b));
   return sum;
}
let p= add(10,15); //call by value- this are argument.

if(p>=20){
console.log('Pass!');

}

console.log('----------------------------------------------------------');

/**
 * 
 * @param {string} browsername 
 */
let launch = function browserLaunch(browsername){
    console.log('Browser name is: '+browsername);

    switch (browsername.trim().toLocaleLowerCase()) {

        case 'chrome': console.log('Launch chrome browser!');
        return true;
        case 'firefox': console.log('Launch firefox browser!');
        return true;
        case 'edge': console.log('Launch edge browser!');
        return true;
        case 'safari': console.log('Launch safari browser!');
        return true;
                 
        default: console.log('Incorrect browser: '+browsername);
        return false;
    }

}
if (launch('firefox')) {
    console.log('Enter the url');
    
}
else{
     console.log('Do not enter the url');
}





