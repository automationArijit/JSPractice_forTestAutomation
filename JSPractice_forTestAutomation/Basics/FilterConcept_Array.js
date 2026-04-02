//filter:

// print even  and numbers from the array:
let nums = [1,2,3,4,5,6,7,8,9,10];
let even = nums.filter( ele => ele % 2 === 0 );
console.log(even);  //[ 2, 4, 6, 8, 10 ]

let odd = nums.filter( ele => ele % 2 === 1 ); 
console.log(odd); //[ 1, 3, 5, 7, 9 ]

// numbers >=5
let greterequalfive = nums.filter( ele => ele>=5 );
console.log(greterequalfive); //[ 5, 6, 7, 8, 9, 10 ]

// numbers >3 and <7 :
let greterAndsmaller = nums.filter( ele => ele>=3 && ele<=7 );
console.log(greterAndsmaller); //[ 3, 4, 5, 6, 7 ]

// liks size<=4:
let links=['help','contact','music','price','prime'];
let size = links.filter( ele => ele.length<=4 );
console.log(size); //[ 'help' ]

let Footerlinks=['help','amazon contact','amazon music','price','amazon prime'];

let perticularlink = Footerlinks.filter( ele =>ele.includes('amazon ') );
console.log(perticularlink ); //[ 'amazon contact', 'amazon music', 'amazon prime' ]

//same using startsWith:
let startsWith = Footerlinks.filter( ele =>ele.startsWith('amazon ') );
console.log(startsWith); //[ 'amazon contact', 'amazon music', 'amazon prime' ]

// only return positive number: double filter : numbers >60
let Numbers = [1,-5,8,85,6,-9,75,58,-12,69,-27,-91];
let ret= Numbers.filter( ele => ele>0).filter( ele => ele>60 );
console.log(ret); //[ 85, 75, 69 ]

//double filter:
let Headerlinks = ['help','amazon contact','amazon music','price','amazon prime'];
let finalLink = Headerlinks.filter( ele =>ele.startsWith('amazon ') ).filter( ele =>ele.includes('prime') );
console.log(finalLink); //[ 'amazon prime' ]






