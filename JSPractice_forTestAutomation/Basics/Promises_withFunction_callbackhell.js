//Asynchronous function to get the coffee: it can be async also but its not mandatory to write...
//All are async function **async is not mandatory to write***
//**But for await we must have to write async**

async function startMachine() {  // **Here every function return promise***
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. Machine started');
            resolve();
        }, 5000); // i will promise after 5 sec machine will start.
    });
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. Water bolied');
            resolve();
        }, 3000);
    });
}


function addCoffeePowder() {
    return new Promise((resolve) => {
       setTimeout(() => {
        console.log('3. Coffee powder added');
        resolve();
    }, 1500);
    
    });
   
}

function pourInCup() {
   return new Promise((resolve) => {
       setTimeout(() => {
        console.log('4. Poured in Cup');
        resolve();
    }, 2000);
    
    });
}

function serveCoffee() {
    return new Promise((resolve) => {
       setTimeout(() => {
        console.log('5. Coffee is served');
        resolve();
    }, 1000);
    
    });
}

//calling the function using .then() chaining:  ---promise chaining..
// startMachine()
//     .then(boilWater)
//     .then(addCoffeePowder)
//     .then(pourInCup)
//     .then(serveCoffee)
//     .then(result => console.log('enjoy ur coffee!!!'));

//--------people are not also liking this in now a days-------still slightly lengly.

//async - await: they work together always.  Here all async will convert into sync.

async function makeCoffee() {
    //async steps:
    await startMachine();//5secs -- done
    await boilWater();
    await addCoffeePowder();
    await pourInCup();
    await serveCoffee();
    console.log('enjoy ur coffee!!!');
}

makeCoffee();

//

//AC: fetch the data from api:
//GET call: url
// await json response : 2, 3,4,5
// await read the json: 1,2

async function fetchData() {
    try {
        console.log('fetching the data....');
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // it returns "promise", so itsasync, thats why we use await.
        let data = await response.json(); // it returns "promise", so its async, thats why we use await.
        console.log("title: " + data.title); // inside data obj tittle is the key of a property.
        console.log("body: " + data.body);
    }
    catch (error) {
        console.log(error);
    }
}

fetchData();

//** fetch(), json() --> this are inbuild methods of node, its return promise , so we use await.