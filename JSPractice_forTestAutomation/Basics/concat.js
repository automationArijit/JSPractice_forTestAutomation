let a=100;
let b=200;
console.log(a+b);//300
console.log(a-b);//-100
console.log(a/b);//0.5
console.log(a*b);//20000

console.log('==========');

let x='hello'
let y='playwright'
console.log(x+" "+y) //String concatination.
console.log(a+b+x+y); //300helloplaywright --execution always left to right.
console.log(x+y+a+b); //helloplaywright100200
console.log(x+y+(a+b)); //helloplaywright300
console.log(a+b+x+y+a+b); // 300helloplaywright100200
console.log(a+b+x+y+(a+b)); // 300helloplaywright300

console.log('==========');

console.log('The value of a is: '+a); // The value of a is: 100
console.log('The sum is : '+(a+b)); //The sum is : 300
console.log(true+' hello world '+false); //truehello worldfalse




