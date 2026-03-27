
//condition ? expressionIfTrue : expressionIfFalse

let age=20;
let result =   age > 18 ? 'Adult' : 'Minor';
console.log(result);

let a=10;
a >5 ? console.log('Hi') : console.log('Bye');

let browser = 'opera';

browser === 'chrome'
  ? console.log('run chrome')
  : browser === 'firefox'
    ? console.log('run firefox')
    : console.log('no browser found');

console.log('===============================');

let isLoggedin = false; // true call goToDashboard()

isLoggedin ? goToDashboard()   : backtoLoginPage() ;

function goToDashboard()
{
  console.log('Welcome to dashboard page!');
  
}

function backtoLoginPage()
{
    console.log('reurn back to login page!');
}


//clonsole.log will generate a new line to print next. But if (rare case) you do not want the line 
//like java: spoln --ln for next line, and sop.
process.stdout.write('No extra line print'); // only applicable for string based values.


console.log('----------------')

let path1 = 'C:\\Users\\Documents\\file.txt';
// let path2 = 'C:\Users\Documents\file.txt'; ---> will give abstarct output for single '\'
let path2 = String.raw`C:\Users\Documents\file.txt`;

console.log(path1);
console.log(path2);

/*
\\  becomes just \ (invalid escape, treated as literal)
\U  becomes just U (invalid escape, treated as literal)
\t  becomes a form feed character (valid escape sequence)
\n  becomes a tab character (valid escape sequence)
*/


