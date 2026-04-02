//Map concept:
let keep = [1,2,3,4,5];
let num1= keep.map( num => num+5 );
console.log(num1);  //[ 6, 7, 8, 9, 10 ] --array of same size
console.log(num1.length); //5
console.log(keep); //[ 1, 2, 3, 4, 5 ]

// double the number : map()
let veep = keep.map( ele => ele*ele);
console.log(veep); //[ 1, 4, 9, 16, 25 ]

// Transformation of string : map()

let words =['hi','javascript','java','selenium','playwright'];
let upper = words.map( ele => ele.toUpperCase());
console.log(upper); //[ 'HI', 'JAVASCRIPT', 'JAVA', 'SELENIUM', 'PLAYWRIGHT' ]


// Transformation of string >> get first letter of each word : map()
let firstelement = words.map( ele => ele[0]);
console.log(firstelement); //[ 'h', 'j', 'j', 's', 'p' ]

// Transformation of string >> each word make > hi!@,javascript!@ : map()
let spclword= words.map( ele => ele + '!@');
console.log(spclword); //[ 'hi!@', 'javascript!@', 'java!@', 'selenium!@', 'playwright!@' ]

// Transformation of string >> add amazon at bigining of each word : map()
let links=['help','contact','music','price','prime'];
let addamazon= links.map( ele => 'amazon '+ele );
console.log(addamazon);


