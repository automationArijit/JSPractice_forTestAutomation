// reduce () : make in single value. size reduced.
//need 2 params
let nums = [1,2,3,4,5];
let finalOutput = nums.reduce( (total,ele) => total=total+ele ); //initially: total =0
console.log(finalOutput); //15.

//Anotherway:
let finalOutput1 = nums.reduce( (total,ele) => total+ele,0 ); //initially: total =0
console.log(finalOutput1); //15.

// Multiply all numbers: O/P=120, here, total =1

let finalOutput2 = nums.reduce( (total,ele) => total*ele,1 );
console.log(finalOutput2); //120.

//reduce() : O/P = help contact music price prime
let links= ['help','contact','music','price','prime'];
let finalOutput3 =  links.reduce( (makespace,ele) => makespace=makespace+' '+ele);
console.log(finalOutput3); //help contact music price prime

let marks=[87,90,73,92,26,51];
let avg = marks.reduce( (sum,ele) => sum+ele, 0) /marks.length 
console.log(avg); //69.83333333333333






