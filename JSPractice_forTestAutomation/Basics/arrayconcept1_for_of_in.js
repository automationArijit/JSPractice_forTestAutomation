// Array : Collection of multiple elements in a single variable.

let n = []; //empty array
console.log(n.length); //0 --here length is the property, not the function.

// Known arrays : Array Literals.

let num= [10,20,30,40];
console.log(num.length); //4
console.log(num[0]); //10 
console.log(num[3]); //40
console.log(num[4]); //undefined. --not AIOB like java.
console.log(num[-1]); //undefined. --not AIOB like java.

// Mixed data types:

let emp = ['Arijit',34,24.58, true,'m'];
console.log(emp.length); //5
console.log(emp); // [ 'Arijit', 34, 24.58, true, 'm' ]

// Using array constructor:
console.log('====Using array constructor:=====');

let rollno =new Array (15,18,22,24,28);
console.log(rollno); //[ 15, 18, 22, 24, 28 ]

console.log('====Using array interface =====');

let classno = Array.of (5,8,12,2);
console.log(classno); //[ 5, 8, 12, 2 ]

// JS array is always dynamic array : no fixed size, like java. so no concept of collection.

console.log('==== push() to add element in array ====='+'\n');

let arr =[5,6,8];
arr.push(12,18,24); // add element at last.
console.log(arr);
arr.push('admin', true, 25.68, 'm');
console.log(arr);

// add element at bigging:
console.log('==== add element at biggining: unshit() ====='+'\n');

let ar = [2,true,'edge'];
ar.unshift('firefox')
console.log(ar); // [ 'firefox', 2, true, 'edge' ]

console.log('==== remove element at ending: pop() ====='+'\n');

let removeEle =['brave','safari', 'chromium'];
console.log(removeEle);
removeEle.pop();
console.log(removeEle);

console.log('==== remove element at starting: shift() ====='+'\n');

let startEleremove = ['JS','Java','Python','C#'];
console.log(startEleremove); //[ 'JS', 'Java', 'Python', 'C#' ]
let ele=startEleremove.shift(); // we can get also removed ele.
console.log(ele); // JS

console.log(startEleremove); //[ 'Java', 'Python', 'C#' ]

console.log('==== Array for loops ============'+'\n');

let mybrowser =['chrome', 'edge','firefox','safari','opera'];

//For loop: index based

for(let i=0 ; i<=mybrowser.length-1 ; i++ ){
  
    console.log(mybrowser[i]);

    if (mybrowser[i]==='opera') {
        
        console.log('opera browser is not supported now ....!');
        console.log('\n');
    }
    
 }
 
 console.log('==== Array for .. of loops ============'+'\n');

//For ...of loop:

for(let ele of mybrowser){
     
    console.log(ele);
    
}
console.log('==== Array for .. of loops with break ============'+'\n');


for(let ele of mybrowser){
     //console.log(ele);
    if (ele==='safari') {
        console.log('run browser in headless mode !');
        break;
    }   
}
// *** Reverse order not possible for : for..of loop. ***

console.log('==== Array print reverse order using index based for loop============'+'\n');

let employee=['Ram','Laxman','Sita', 'Hanuman','Sugrib','Hari','Narayan'];

for(let i=employee.length-1 ;i>=0 ; i--){
 
    console.log(employee[i]);
    
}
console.log('==== Array print reverse order for ..of loop using extra variable ============'+'\n');

let employee1 = ['Raja','Raman','Bol','Diner','Seshe','Ghumer','Deshe'];

let reverseArray = []; // extra variable

for (let i = employee.length - 1; i >= 0; i--) {
    reverseArray.push(employee1[i]);
}

for (let name of reverseArray) {
    console.log(name);
}


console.log('==== Array index print: using for..in loop============'+'\n');

let empdata=['Amit','Ram','Jha','Deba','Monoj','Mahesh'];

for(ele in empdata){

    console.log('Index of '+empdata[ele]+' is: = '+ele);
    
}
// Index of Amit is: = 0
// Index of Ram is: = 1
// Index of Jha is: = 2
// Index of Deba is: = 3
// Index of Monoj is: = 4
// Index of Mahesh is: = 5

console.log('==== reverse() to reverse an array: Simple============'+'\n');

console.log(empdata.reverse()); // [ 'Mahesh', 'Monoj', 'Deba', 'Jha', 'Ram', 'Amit' ]


console.log('==== join() in Array: join the element ============'+'\n');

//joint
let word=['Hello','Playwright','for','Test','Automation'];
let sentance= word.join(' ');
console.log(sentance); // Hello Playwright for Test Automation


console.log('==== copy/combine: Array by using ... (spread operator)============'+'\n');

let first=[5,9,3];
let second=[...first];
console.log(second); //[ 5, 9, 3 ]

//Combine two arrays: Way 1:

let ar1=[1,2,3];
let ar2=[4,5,6];
let ar3=[...ar1,...ar2];
console.log(ar3); //[ 1, 2, 3, 4, 5, 6 ]

//OR simple Way2:
let ar4= ar1.concat(ar2);
console.log(ar4); //[ 1, 2, 3, 4, 5, 6 ]







