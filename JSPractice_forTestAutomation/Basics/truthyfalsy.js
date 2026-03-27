// 8 falsy value in JS:
// 1. false 
// 2. 0 (zero) 
// 3. -0 (-zero) 4.
//  "" -- empty string.
// 5. 0n --> Big Int.
// 6. null
//7. undefined.
//8. NaN

// Except this 8 all are truthy.

if (false) {
    console.log('oops!'); //Dead code, unreachable code.
    
}
if (undefined) {
    console.log('No print');
    
} else {
       console.log('Print');
}

if (null) {
    console.log('No print1');
    
} else {
       console.log('Print null');
}

if (0) {
    console.log('No print2');
    
} else {
       console.log('Print zero');
}

if (-0) {
    console.log('No print2');
    
} else {
       console.log('Print -zero');
}

if ('-0') // true
    {
    console.log('Now print -0');
    
} else {
       console.log('Print -zero');
}

if ([]) // true
    {
    console.log('Blank array!');
    
} else {
       console.log('Print array');
}

if (Infinity) // true
    {
    console.log('Infinity print!');
    
} else {
       console.log('Infinity not print');
}

if (new Date) // true -- Object
    {
    console.log('Object print!');
    
} else {
       console.log('Object not print');
}