console.log("Hello World!");

function add(a, b) {
  return a + b;
}

for (let i = 0; i < 10000000; i++) {
  add(2, 3);
}
//Turbo fan is used. 
//to check it: node --trace-opt filename.js

//For bite code: node --print-bytecode filename.jsnode --print-bytecode   

let lang='java';
console.log(lang);

//to know type
console.log(typeof(true)); //boolean
console.log(typeof(null)); // object
console.log(typeof(undefined)); //undefined
console.log(typeof(5)); // number
console.log(typeof('a')); //string





