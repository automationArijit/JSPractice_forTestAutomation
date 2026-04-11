// "pending": => While js fetching data the from api/ any where --its in "pending" state.
// "resolved": => If it perform the task, return a value.
// "rejected":=> If it unable to perform the task, return error/ give the reason.

// ****In order to overcome the drawback of callbackhell ---we go for promise.****

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
.finally( ()=>{                                  //** we  can add multiple  finally, if needed. finally will execute sequential order. 
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

return doubleAmountAfterTime(res)
.then( (res) =>{
console.log(res);

} )
  
} )

console.log('---------------chaining a promise:--------------------');

// promise.all() ---> concept. --return ---->> [promises]
// wait for all promises for resolve/ reject.
// In any of the promises failed, then it goes to catch block, none of the resolve promse will execute, not go to the then part.

let promise1= new Promise( (resolve, rejected) =>{
      resolve('promise 1 is getting passed....')
} );

let promise2= new Promise( (resolve, rejected) =>{
      resolve('promise 2 is getting passed....')
} );

let promise3= new Promise( (resolve, rejected) =>{
      resolve('promise 3 is getting passed....')
} );

Promise.all([promise1,promise2,promise3]) // promise.all() --waiting for all promise to pass/fail.
.then( (result)=>{            // for resolved.
console.log(result);
console.log('all promises are passed!');
} )
.catch( (result)=>{            // for rejected.
console.log(result);
console.log('all promises are failed!');
} )
.finally( ()=>{
console.log('anytime pass!!');
} )

console.log('---------------chaining a promise2:--------------------');

let promise4= new Promise( (resolve, rejected) =>{ // terminate the entire promise chain.
     rejected('promise 4 is getting failed....')
} );

let promise5= new Promise( (resolve, rejected) =>{
      rejected('promise 5 is getting failed....')
} );

let promise6= new Promise( (resolve, rejected) =>{
      rejected('promise 6 is getting failed....')
} );

Promise.all([promise4,promise5,promise6])  // promise.all() --waiting for all promise to pass/fail.
.then( (result)=>{            // for resolved.
console.log(result);
console.log('all promises are passed!');
} )
.catch( (result)=>{            // for rejected.
console.log(result);
console.log('all promises are failed!');
} )
.finally( ()=>{
console.log('anytime pass!!');
} );

console.log('---------------chaining a promise3:--------------------');

// The moment when it see any promise is failed, immidiately it comes into catch block.

let promise7= new Promise( (resolve, rejected) =>{ // terminate the entire promise chain.
     resolve('promise 7 is getting failed....')
} );

let promise8= new Promise( (resolve, rejected) =>{
      rejected('promise 8 is getting failed....')
} );

let promise9= new Promise( (resolve, rejected) =>{
      resolve('promise 9 is getting failed....')
} );

Promise.all([promise7,promise8,promise9])  // promise.all() --waiting for all promise to pass/fail.
.then( (result)=>{            // for resolved.
console.log(result);
console.log('all promises are passed!');
} )
.catch( (result)=>{            // for rejected.
console.log(result);
console.log('all promises are failed!');
} )
.finally( ()=>{
console.log('anytime pass!!');
} );

// promise can be sync/async --- in the last example we are not using setTimeout(), so this is sync.
 
// promise.race() ---> now making it async by using setTimeout() function.
// winner will be anyone either resolve/rejected (does not matter), whoever have lesser setTimeout, will excecute 1st, and become winner in race. 

let m1=new Promise( (resolved,rejected) =>{

    setTimeout(() => {
      resolved('m1 promise is done....')  
    }, 2000);
} )

let m2=new Promise( (resolved,rejected) =>{

    setTimeout(() => {
      resolved('m2 promise is done....')  
    }, 4000);
} )

let m3=new Promise( (resolved,rejected) =>{

    setTimeout(() => {
      rejected('m3 promise is not done....')  
    }, 1000);
} )
Promise.race([m1,m2,m3])
.then(res=>{
    console.log(res);
})
.catch ( res=>{
    console.log(res);

})


