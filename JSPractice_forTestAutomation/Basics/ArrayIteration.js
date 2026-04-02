//Array Iteration:
let prod =['mackbook','ipad','iphone','android','air pods'];
//Here call back function:
// for each need call back function , thats why we use arrowfunction.

prod.forEach( ele => {
    console.log(ele);
    
} ); 
// ele => {
//     console.log(ele);
    
// } ----------> In the for each function we are passing arrow anonymous function. 
// o/p -->mackbook
// ipad
// iphone
// android
// air pods

console.log('-------------Return will not work in for each-------------------');

prod.forEach( ele => {
    console.log(ele);
    if (ele==='iphone') {
    console.log('Getting iphone !');
     return true;
    }
    
} ); // total is printed. --break not allowed.

console.log('-------------solve this prob: use some() method -------------------');
//Give only call back arrow --break not allowed.
let flag= prod.some( ele =>{
    console.log(ele);
    if (ele==='iphone') {
    console.log('Getting iphone !');
     return true;
    }
    
} )
console.log(flag);


