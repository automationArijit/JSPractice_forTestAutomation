// slice --> like sub string in java.

let num=[55,88,77,99,22];
let K = num.slice(2,4); // give the index: Starting index-2, ending index-4, not print end index. (end-1)--will print.
console.log(K); //[ 77, 99 ]

// Get last 3/any umbers: But do not give beyound the range.
let lastThree = num.slice(-3);
console.log(lastThree); //[ 77, 99, 22 ]
let check = num.slice(1); 
console.log(check); //[88,77,99,22]

