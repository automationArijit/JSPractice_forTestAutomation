//addition + operation
// **number + String:= concatination**
console.log(1+'1'); // concatinaltion happens. o/p=11
//Substraction
// **number + String:= convert string to number, o/p=0**
console.log(1-'1');
console.log('5'- 3); //2
console.log('5'-'2'); //3
console.log(5-'hello'); //NaN --(Not a number)
console.log('javascript'-10); //NaN --(Not a number)

console.log('=====Multiplication=====')

console.log(5*10);//50
console.log(5*'6'); //30
console.log('5'*'8'); //40
console.log('Hello'*'8'); //NaN
console.log('Hello'*'8java'); //NaN

console.log('=====Concatination with + operator always=====')

let num ='25';
console.log(num+5); //255
console.log(num-5); // 20

console.log('=====Division=====')

let num1 ='25';
console.log(num1/5); //5
console.log(50.0/5); //10
console.log(4/2.0); //2
console.log(5/0); //Infinity
console.log(0/8); //0
console.log(0/0); //NaN
console.log(0.0/0.0); //NaN

console.log('=====Modulas=====')

console.log(8%2); //0
console.log(9%2); //1
console.log('14'%2); //0
console.log('14'%'3'); //2

console.log('=====Exponential or power using ** =====')

console.log(2**3); //8  --> 2 to the power 3 =8
console.log(2**'3'); //8  --> 2 to the power 3 =8

console.log('=====Unary plus operator =====')
//only concatination
console.log(+5+'2'); //52
console.log('5'+4); //54
console.log(+5+4); //9

console.log('=====Unary negative operator =====')

console.log(-'42'+1); //-41
console.log(-'42'+'1'); //-421








