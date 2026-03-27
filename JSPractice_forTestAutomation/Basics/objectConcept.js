//Object: Its a collection of properties in key and value pair format.
//Key - string
//value - anyhing
let user = {   // user is ref var.
name:'Hari',
age:30,
statusis: 'active',
isEmployed: true,
};
// Here 4 properties the object have, to acsses the property: 2 ways:
//1st way:
console.log(user.name); //ref var.property name
//2nd way:
console.log(user['age']); 
// delete prop:
delete user.statusis;
console.log(user); //{ name: 'Hari', age: 30, isEmployed: true } --> status is missing, coz we delete it.
console.log(user.statusis); //undefined
//add prop:
user.city='Kolkata';
console.log(user); //{ name: 'Hari', age: 30, isEmployed: true, city: 'Kolkata' }
//Small condition check:
if(user.name==='Hari'){
    console.log('Pass!'); //Pass!
    
}
//Update the prop:
user.age=40;
console.log(user); //{ name: 'Hari', age: 40, isEmployed: true, city: 'Kolkata' }
// ** IN JS: Object, Array , function is always store in Heap memory.**
// Other than this al store in stack memory (ex: ref var)
// GC (garbeg collector) will destort those objecr having ref var =null, it comes when heap memory is tends to fill.

let person = {
    Name:'Amit',
    age:20,
    voter:true,
    isActive:false,
    city:'Durgapur'
};
//Giving null value to the obj
person=null;
//console.log(person.city); //Gives error, coz it consumes by GC, REf var: person in stack is now indicates null.

console.log('-------------Iteration of obj using for in loop ---------------');

for(let ele in user){

    console.log(ele+' : '+user[ele]);
    
}
// name : Hari
// age : 40
// isEmployed : true
// city : Kolkata

console.log('-------------Iteration of obj using for in loop ---------------');

let testing ={
    testenv:'staging',
    finaloutcome : 'production',
    machine: 'local',
    location: 'India',
    City: 'Kolkata,'
};

//Now Obj iteration using --> for in loop

for(let key in testing ){
    // To print only key:
    console.log(key);
    //To print value:
    console.log(testing[key]);
}
