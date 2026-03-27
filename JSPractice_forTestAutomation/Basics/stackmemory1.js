//Creating function:

function testing(){
    console.log('Hello testing!');
    
}
//calling the function:
testing(); //will be executed in the stack memory.
//when we execute function/method it will occupay some stack memory: called memory allocation, once 
// the excecution is done, again stack memory becomes zero. All non primitive store in heap.
// memory: 0-2 = allocation, 2-0 = deallocation.
console.log('-----Range error: stack overflow in java---------------');

//Calling a function inside a function.

function software(){
    console.log('Hi software!');
     hardware ();
}

function hardware (){
    console.log('Hi hardware');
    software();
}
//software(); // RangeError: Maximum call stack size exceeded

console.log('-----No infinite calling---------------');

function rest(){
    console.log('have test!');
    
}
function good(){
    console.log('good!');
    boy();
}
function boy(){
    console.log('boy!');
    rest();
}

good(); // This not not infinite calling.

// Here: LIFO concept aplly: last in first out, so rest() in fast, so out fast, dealocate memory 1st.
// rest > boy > good -- de alocation sequence.

// Recursion : a function calling itself.

function login(){
    console.log('Login to the application');
     login();
}
 //login(); 

 //queue: FILO concept.
 