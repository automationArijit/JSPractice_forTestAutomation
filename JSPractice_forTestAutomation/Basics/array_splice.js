//splice : add/remove element at specified location.

//Syntax:  array.splice(start, deletecount, item1,item2....)

let fruits= ['apple','oranhe','banana','greps','peapa','kiwi','pineapple'];

let del= fruits.splice(2,1);
console.log(del);
console.log(fruits); //[ 'apple', 'oranhe', 'greps', 'peapa', 'kiwi', 'pineapple' ]
let del1= fruits.splice(3,3,'Mango','chery');
console.log(del1);

console.log('---------------');

// Remove from the end: Negative index. Index start from -1 (in reverse direction)

let emp=['Ram','Shyam','Hari','Gopal','Mohan'];
let m= emp.splice(-3,2); 
console.log(m); //[ 'Hari', 'Gopal' ]

console.log('---------------');

//Adding single fruit in index 1:

let frt=['apple','pineapple','grapes','goava']
frt.splice(1,0,'Mango');
console.log(frt); // [ 'apple', 'Mango', 'pineapple', 'grapes', 'goava' ]


console.log('---------------');

//Adding multiple element at index 0:

let num=[54,85,76];
num.splice(0,0,5,8,2,9); // start index (0), deletecount(0), add item(1),2,3.......
console.log(num); //[5,8,2,9,54,85,76]

console.log('------- Replace element using splice in : Array--------');

let days= ['monday','tuesday','wednesday','thrusday','friday'];
//replace --> wednesday to funnyday
days.splice(2,1,'funnyday'); /// start index (2), deletecount(1), replace element
console.log(days); //[ 'monday', 'tuesday', 'funnyday', 'thrusday', 'friday' ]

console.log('------- Replace multiple element using splice in : Array--------');

let months=['jan','feb','mar','apr','may','june','july'];
// replace --> 'mar','apr','may' (3 element) > spring,summer,holidays
months.splice(2,3,'spring','summer','holidays');
console.log(months); 
// [
//   'jan',      'feb',
//   'spring',   'summer',
//   'holidays', 'june',
//   'july'
// ]





