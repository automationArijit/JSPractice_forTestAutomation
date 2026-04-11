
let pi=3.14;
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function sumOfTwoNumber(a,b){
console.log(`The sum  of ${a} and ${b} is: `+(a+b));

}

let name='Raksesh';
let age =45;
//Creating anonymous function: No name

let anyo = function () {
    console.log('I am an anonymous function!!');
    
}
//Creating arow function: No name
let arw = () =>{
    console.log('I am arrow function!!');
    
}

// ** Only one default function/variable/array/object can export **:
export default function getdata(){
    console.log('Getting the default data!!');
    
}
// Duplicate defaults are not allowed:
// export default function getdata(){
//     console.log('Getting the default data!!');
    
// }

// * But for variable if you want to make as default, then rule is:-
let price=100;
//export default price; --> but we can not make double default, only one allowed.



// individually for evert variable/function we can write export, but it looks ugly.

export{pi,name,sumOfTwoNumber,arw,anyo};
