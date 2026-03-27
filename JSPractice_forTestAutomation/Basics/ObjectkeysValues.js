// obj keys values:
let user={
  name:'tom',
  age:20,
  city:'pune',
  isActive:true
}
console.log('-----For keys = keys--------');
let userkeys = Object.keys(user); //RT: [String]
console.log(userkeys); //[ 'name', 'age', 'city', 'isActive' ]
console.log(userkeys.length); //4

console.log('-----For values = values--------');

let uservalues = Object.values(user);
console.log(uservalues); //[ 'tom', 20, 'pune', true ]
console.log(uservalues.length); //4

console.log('-----For key-values =entries --------');

let pair = Object.entries(user);
console.log(pair);

console.log('-------------------------- --------');

//print keys on the basis of values:

for(let ele in user){
 
    if(user[ele]==='pune'){
     
        console.log(ele);
        
    }

}