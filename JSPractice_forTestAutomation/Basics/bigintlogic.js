// large number
let num= 54789658745442533214526587;
console.log(num+22); // wrong value: 5.478965874544253e+25

// Max safe value of integer:
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Min safe value of integer:
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

//**  we can not mix big int with integer ***
let number =10
console.log(typeof(number)); //number

let bignum =10n // its big int , num with n
console.log(typeof(bignum)); // bigint

//big int + big int
console.log(12n+20n); // 32n


//mixing big int with int --gives error: 

let bignum1 =10n
console.log(bignum1+10); // error: Cannot mix BigInt and other types






