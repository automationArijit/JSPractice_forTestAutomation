
// **Run 2 function in parallel mode**
// not using await when calling the function, or ele it will become sync function.

console.log('======scenario:1 >> parallel execution ==========');

async function getEmpData() {
    return new Promise( resolve =>{
        console.log('Fetching the employee data....');
        setTimeout(() => {
            resolve( {id:5,empName:'Bikash',city:'Kolkata',pin:'755598'} ); //here passing obj by comma separated.
        }, 1500);
    } )
}

async function getOrders() {
    return new Promise( resolve =>{
        console.log('Fetching the order details.....');
        setTimeout(() => {
             resolve( [
                {orderid:10,type:'iphone',price:'70k'},
                {orderid:16,type:'android',price:'40k'},
                {orderid:18,type:'ipad',price:'35k'}
             ] ); // passing array of orders object
        }, 2000);
    } )
}

//Calling the functions:- not using await for parallel run
let empPromise = getEmpData(); // it returns promise. --1.5sec
let ordersPromise = getOrders();  // it returns promise. --2sec
// calling promise all function
let [emp,orders] = await Promise.all( [empPromise, ordersPromise] ); // pass array of promise
// So, if we store its value in a single variable, then it become messay, will conatiln array of 'empPromise' and object array of 'ordersPromise'.
// Thats why , best way ids destructuting:  [emp,orders] 
console.log(emp); //emp for empPromise, returns array
console.log(orders); //orders for ordersPromise, returns array objects.

//total time taking: 2sec
console.log('======scenario:2 >> sequential execution ==========');


async function getEmpData1() {
    return new Promise( resolve =>{
        console.log('Fetching the employee data....');
        setTimeout(() => {
            resolve( {id:5,empName:'Bikash',city:'Kolkata',pin:'755598'} ); //here passing obj by comma separated.
        }, 1500);
    } )
}

async function getOrders1() {
    return new Promise( resolve =>{
        console.log('Fetching the order details.....');
        setTimeout(() => {
             resolve( [
                {orderid:10,type:'iphone',price:'70k'},
                {orderid:16,type:'android',price:'40k'},
                {orderid:18,type:'ipad',price:'35k'}
             ] ); // passing array of orders object
        }, 2000);
    } )
}

let empPromise1 = await getEmpData1(); //-- once done then only go to next function.
let ordersPromise1 = await getOrders1();
let [val,bal]= await Promise.all ( [empPromise1,ordersPromise1] );  // destructuring [val,bal]
console.log(val); 
//empPromise1, ordersPromise1 => this are not promises, they are holding actual value after resolving.
// total time taking: 1.5+2=3.5 sec
//**await gives the resolved promise data***.
//**  Promise.all --> gives all resolved promise data ***

console.log('======scenario:3 >> dont wait for anything, just proceed. ==========');

async function sendEmainNotification(email){
    return new Promise( resolve =>{
     console.log('Start sendling email notifications....');
     
     setTimeout(() => {
        console.log(`Sending email to:- ${email}`);
        resolve (true);
     }, 5000);
    })
}

sendEmainNotification('arijit@gmail.com'); // execute 2nd
console.log('Checkout the order!! done....');  // execute 1st, not wait
// ** perfect example of async process, importance of await.
//In amazon we get the order confirmation in app, then after few min we get the email....