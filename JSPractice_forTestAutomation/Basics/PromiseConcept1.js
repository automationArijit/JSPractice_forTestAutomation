// "pending": => While js fetching data the from api/ any where --its in "pending" state.
// "resolved": => If it perform the task, return a value.
// "rejected":=> If it unable to perform the task, return error/ give the reason.

let myPromise = new Promise( (resolve, rejected) =>{

    console.log('Start the promise.....');
    let sucess =true;
    if (sucess) {
        resolve('Training is done');
        
    } else {
         rejected('Training is failed!!!');
    }


} ); 
// promise is a constructor, so have to use new keyword.
// 2 callback function ( mandatory) , so passing ref of 2 call back function.
// If promise is fullfilled: given to 'then()' function.
// If promise is rejected: given to 'catch()' function.

//--calling the promise:
myPromise.then( (result) =>{
console.log(result);

} ).catch( (error) =>{
console.log(error);
} );

//If we know earlier: error is must happening, In promise:
// by knowing the result also, we have to maintain 2 params, coz its always expect that the first param is resolve,


let PromsiseTest = new Promise( (resolved,rejected) =>{

console.log('Entering into promise..');
rejected('Opps!! Something went wrong!!');

});

PromsiseTest.catch( (error) =>{
console.log(error);

} );

//result promise:
let resultPromise = new Promise( (resolved,rejected) => {
    console.log("I am now in promise section.....");
    resolved('Things are resolved ');
});

resultPromise.then( (res) =>{
console.log(res);

} );

console.log('---------------------finally block always execute.-------------------------------');

let cakePromise = new Promise((passCase,failCase) => {
    console.log('Start making a cake ....');
    let cakemaking =false;
    if (cakemaking) {
        passCase('Cake making is done!!');
    } else {
        failCase('Sorry! i am sick!');
    }
});

cakePromise
.then( pass => {
   console.log(pass);
    
} )
.catch ( fail =>{
    console.log(fail);
} )
.finally( ()=>{
    console.log('Anyway we must do the party!');
    
} )

console.log('---------------chaining a promise:--------------------');
// This function is returning a promise : resolved.

function doubleAmountAfterTime(data){
    return new Promise((resolving,rejecting) => {
        setTimeout( () =>{
            resolving(data*2);
        } ,2000);
    })
}

//calling the function:

doubleAmountAfterTime(10)
.then( (res) => {
  console.log(res);
  
} )






