// Creating a Obj

let user = {
    name:'Akash',
    age:30,
    address:{ // creating another obj inside user obj
        city:'bangalore',
        pin: 587458,
        area:{   // creating another obj inside address obj
           location:'jadavpur',
           ward:103,
           landmark:'jora bridge'
        }

    }
};

console.log(user); //{ name: 'Akash', age: 30, address: { city: 'bangalore', pin: 587458 } }
console.log(user.address); //{ city: 'bangalore', pin: 587458 }
console.log(user.address.pin); //587458
console.log(user.address.area.ward); //103

console.log('----------------------Iteration ----------------------');
//Recursive function:
function printObj(obj) {
    for (let key in obj) {

        if (typeof obj[key] === 'object') {
            printObj(obj[key]); // call function again.
        } else {
            console.log(key, obj[key]);
        }

    }
}

printObj(user);