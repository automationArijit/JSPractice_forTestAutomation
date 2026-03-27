// true => 1
// false => 0

if(1) // use 0 fo fail.
{
    console.log('pass');
}
else
{
    console.log('fail');
}

console.log(1+false); //1+0=1 --> concatination happens
console.log('2'-true); // for substraction, string convert to number ,o/p=2-1=1
console.log('1'+true); // --> concatination happens > 1true
console.log(false+true); //0+1=1
console.log(false+false); //0+=0
console.log('false'+false); //falsefalse --> Concatination.
console.log('true'-true); //NaN ---> string -1 =NaN



