// map(), filter(), reduce () : Array methods.

// map() : used for transformations.
//Ex:= [1,2,,3] >> square>> [1,4,,9] >> add +5 >> [6,9,,14] >> return array: size same.

// filter(): filtration --> [1,2,3,4,5,6] >logic: div/2 >> [2,4,6],  return array: size varry (+ /-)

// reduce () : combining -> [1,4,,9] ==> 14 , single value.

console.log("------------------------------");

let arr = [1,2,3,4,5,6,7,8,9];

// MAP → multiply each element by 2
let mapped = arr.map(num => num * 2);
console.log("After map:", mapped);

// FILTER → keep numbers greater than 10
let filtered = mapped.filter(num => num > 10);
console.log("After filter:", filtered);

// REDUCE → sum all numbers
let total = filtered.reduce((sum, num) => sum + num, 0);
console.log("After reduce:", total);

console.log("------------------------------");



