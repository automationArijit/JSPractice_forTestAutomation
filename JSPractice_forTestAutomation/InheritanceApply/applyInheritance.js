
import { Vehicle, BMW } from '../inheritanceConcept/inheritance1.js'

//Creating child class object:
let bm = new BMW();
bm.engine();
console.log(bm.speed);
bm.stop(); // using parent class property.
bm.refuel(); // using parent class property.
bm.start(); //Starting the BMW.... Getting overriden implimentation.
bm.stop(); //Stoping the vehicle....
bm.shoker(); // inherit/consume propery from its immidiate parent.

console.log('-----------------------------------------');


//Creating parent class object:
let ve = new Vehicle();
ve.start(); //Starting the vehicle....
ve.stop(); //Stoping the vehicle....

// Top casting and down casting is not possible in JS.

bm = ve; // mesans: bm you start refering to ve, now.....
// ** JS not checking the type of obj, cox object has no type in js, its just stored inside a variable..**

console.log('-----------------------------------------');
bm.start(); //Starting the vehicle....
// whatever data is available inside 've' now 'bm' can get this. 




