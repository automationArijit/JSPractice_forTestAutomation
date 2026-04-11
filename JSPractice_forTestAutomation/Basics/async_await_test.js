
// not mandatory to write async:
async function fetchData(){
 return new Promise( resolve =>{ // we can write only resolve/reject, by default promise is always: resolve. 
 console.log('fetching the data.....');

    setTimeout(() => {
        resolve('selenium');
    }, 2000);
 })
}
// here we will not use then(), catch() to hold the value.
let val=await fetchData();
console.log(val);

//we can pass anything in async function, here passing obj.

async function getEmpData() {
    return new Promise( resolve =>{
        console.log('Fetching the employee data....');
        setTimeout(() => {
            resolve( {id:5,empName:'Bikash',city:'Kolkata',pin:'755598'} ); //here passing obj by comma separated.
        }, 1500);
    } )
}
// using await, not -->> then, catch method...
let obj = await getEmpData(); // obj variable holding the object properties.
console.log(obj.city); //Kolkata


// acceptance criteria: return array of oders object.

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
//calling the function:
let value= await getOrders(); // variable contain array of objects.
console.log(value[0].type);
console.log(value[2]);



