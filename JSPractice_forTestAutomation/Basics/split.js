//Split method():

let text ='java_javascript_ruby_python_typescript';
let separate = text.split('_'); //returns array
console.log(separate); // [ 'java', 'javascript', 'ruby', 'python', 'typescript' ]
console.log(separate[0]); // java
console.log(separate[5]); //undefined

console.log('---------------');
let msg='selenium cypress playwright'
let output = msg.split(' ');
console.log(output); //[ 'selenium', 'cypress', 'playwright' ]
//**** * imp 
console.log('---------------');

let test= 'aAseleniumAaAplaywightAAaAtestingAA'
let tem = test.split('aA');
console.log(tem[0]); // nothing is printed
console.log(tem); //[ '', 'seleniumA', 'playwightAA', 'testingAA' ]


console.log('---------------');

let data ='tom:12.33:true:MCP:50';
let d= data.split(':');
console.log(d); //[ 'tom', '12.33', 'true', 'MCP', '50' ]

console.log('---------------');

let dash ='javascrpit is a funny language';
let da= dash.split('funny');
console.log(da); //[ 'javascrpit is a ', ' language' ]