//Object: real time entity, having its own property, in form of key and valuee pair.
// obj have its own function (behaviour): by using propery obj can perform action.
// By legs (property) we can walk (function).

let user = {
    name:'akash',
    age:30,
    salary:12.65,
    city:'assam',

    //Ob1:
// creating named function - code(), having external name/function expression : coding, have to use : here, coz inside obj we using function.
    coding: function code(){
     console.log(`${this.name} doing coding well.`); //can use user.name also
     
    },

// function with out fuction keyword:
//Ob2:    
printTohave(ctc){
   console.log(`${user.name} having ctc: `+ctc );
   let finalsal = ctc+ this.salary; //can use user.salary also
   return 'Final salary is: '+finalsal;
   
}, 
//Ob3:
//function with no name, passing one params --> anonymous function.
/**
 * 
 * @param {string} sportsname 
 */
play: function(sportsname){
    console.log(`${this.name} is playing: `+sportsname);
    
},

//Ob4:
//Creating arrow function, this. not work here for arrow function.
// spped is one param.
/**
 * 
 * @param {number} speed 
 */
walking: (speed)=> {
 console.log(`${user.name} have walking speed of: ${speed} km/hr`);
 
},

}
console.log(user.name); //akash
console.log(user['age']); //30
user.coding();
let val=user.printTohave(30);
console.log(val);
user.play('football');
user.walking(18);

console.log('--------------Login page example: POM on this topic---------------');

let Loginpage = {

    usernameLocator: `//input[@id='username']`,
    passwordLocator: `//input[@id='password']`,
    loginButtonoLcator: `//button[@id='loginBtn']`,
    
    /**
     * 
     * @param {string} username 
     * @param {string} password 
     */
    LoginProcess(username,password){
      
        console.log(`Entering username : ${username} using locator: ${Loginpage.usernameLocator}`);
        console.log(`Entering password : ${password} using locator: ${Loginpage.passwordLocator}`);
        console.log(`Click on the login button using locator: ${Loginpage.loginButtonoLcator}`);
        console.log(`Login is done with:=>> username: ${username} and password:=>> ${password}`);

        //We can call also, other object (user) property iside another objects (Loginpage) property (LoginProcess).
        console.log('The user object name is: '+user.name+' The user object age is: '+user.age);
        user.coding();
        user.play('cricket');

        
    },
}
Loginpage.LoginProcess('ratul25@gmail.com','Ratul$%85698');



