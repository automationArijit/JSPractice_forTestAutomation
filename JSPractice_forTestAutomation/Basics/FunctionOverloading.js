//Function overloading is not possible in JS: coz its compile time thing, and JS is RT lang.
// in older version of JS:- In package.json --> see type: if :common js, return the latest function.
// In latest version of JS: ES6 its gives error.

function login(){
    console.log('open app1');
    
}

/**
 * 
 * @param {number} a 
 */
// function login(a){
//     console.log('open app2');
    
// }
//can not write duplicate function internal name:
//login(10); // SyntaxError: Identifier 'login' has already been declared

// Option 2:

let normalLogin = function Login(){
    console.log('Login to app1');
}
/**
 * 
 * @param {string} username 
 * @param {string} password 
 */
let LoginwithoutOTP = function LoginwithUsernameAndPassword(username, password){
    console.log(`Login to app2: Having username: ${username} and password: ${password}`);
}

/**
 * 
 * @param {string} username 
 * @param {string} password 
 * @param {number} OTP 
 */
let LoginwithOTP = function LoginwithUserNamePasswordAndOTP(username, password,OTP){
    console.log(`Login to app3: Having username: ${username} , password: ${password}, OTP: ${OTP}`);
}
//calling the function:
normalLogin();
LoginwithoutOTP('Hello','javascript');
LoginwithOTP('Hello','javascript',1234);

console.log('--------------------------------------------------------------');

// Option 3: Actual process.

function signin(){
    if (arguments.length===0) {
        console.log('Signin to application 1');
    }
    
    else if (arguments.length===2) {
       console.log(`Signin to application 2 with: UN: ${arguments[0]} and PSW: ${arguments[1]}`);
    }
    else if (arguments.length===3) {
       console.log(`Signin to application 3 with UN: ${arguments[0]} , PSW: ${arguments[1]} , OTP: ${arguments[2]}`);
    }
    else{
       console.log('Plz pass correct values to login');
    }
}

 signin('admin',10,2587);


console.log('--------------------------------------------------------------');

/**
 * 
 * @param {string} unsername 
 * @param {string} password 
 */
function mylogin(unsername =null, password =null){

    if (unsername && password) {
        console.log('allow user to login');
    }
    else{
         console.log('Do not allow user to login');
    }

}
mylogin('admin','testing');

