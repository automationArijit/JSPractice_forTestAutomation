//Lopps types:
// for, while, do-while . 
// In JS some more adv loops concept: for...in, for ..of, for Each

// while loop: 1 -10

let i=1; // initialization
while (i<=10) //condition
{
    console.log(i);
    i++; // must have to give : i++, other wise get never ending loop.
    // we can write: ++i or i=i+1
}

console.log('====================');

//Break : In loop

let j=1;

while (j<=10) {
    console.log(j); //12345
    if (j===5) {
        console.log('Hello'); //Hello
        break;
    }
   j++; 
}

console.log('====================');

//Infinite loop: can use 'true' also
// while (1) {
//  console.log('Infinite loop!!');
// }

//for loop:

for(let m=1; m<=10; m++){

   console.log(m);
}

console.log('========= can write for loop in other way /not recomended  ===========');
//ugly way of writhing: but possible
let n=22;

for(;n<=30;){
  
     console.log(n);
     n++;
}

// Infinite loop again:
// for(;;){
//    console.log('again infinite loop!!');
// }

// Infinite loop 2:

// for(;true;) //can give 1 also, or 0 for false
// {
//     console.log('oops infinite loop!!');
// }

// Infinite loop stop using 'break' thats it, same code:

for(;;){
     console.log('oops infinite loop not create, we use break!!');
     break;
}

console.log('============   print reverse order: for loop ========');

for(let n=5; n>=0;n--){

    console.log(n);
}
console.log('============   print reverse order: while loop ========');

let p=25;
while (p>=20) {
    console.log(p);
    p--;
}

console.log('============   print even number btw 1 -10: for loop ========');

for(let i=1; i<=10 ; i++ ){ 
 
   if (i%2===0) {
      
     console.log(i);
   }
}

console.log('============   print even number btw 22 - 12: while loop ========');

let k=22;
while (k>=12) {

    if (k%2===0) {
        
         console.log('Even number is: '+k);
    }
    k--;
}

// Use case of while loop: when no of iteration are not fixed.
//------------------->>
// 1. Wait for the webelement, wait for page loading, webtable pagination. 
// 2. Infinite page scrolling (insta, linkedin) , total number of links/elements. 
// 3. Calender handling.
// 4. get data from DB -table.
// 5. Calender handling.



// Use case of for loop: when no of iteration are fixed.

//1. dropdown: Month, day, country 
// 2. excel/csv file: known row and col --1 to 10 row 
// 3. Arrays (fixed size))/list. 
// 4. Flight /movie/bus ticket booking.
// 5. Ecommerce: menu items / catagory.
//6. Fotter link check and print particular link 

console.log('============  do-while loop condition false ========');

let r=8;
do {
    console.log("do while 1"); 
    r++;
    
} while (r>=10); // false, not satisfied condition, but print atleast one time

console.log('============  do-while loop condition true ========');

let rm=8;
do {
    console.log("Print 3 times"); 
    rm++;
    
} while (rm<=10); // true, satisfied condition.

console.log('============  do-while loop spcl case1 ========');

let e= 1;

do {
  e++; //2,3,4,5
console.log('pre increase'); // O/P = 4 times print this msg

} while (e<=4);
//Use case: for do-while:
// Land on the page -check the element in the bigining itself -- atleast one time.

