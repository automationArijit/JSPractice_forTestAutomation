//indexof:

let days= ['monday','tuesday','wednesday','thrusday','friday'];
let ind = days.indexOf('wednesday');
console.log(ind); //2

//if data is not present in array: o/p =-1

let p = days.indexOf('arijit');
console.log(p); // -1

if ( days.indexOf('wednesday'===2)) {

    console.log('pass!');
        
} else {
     console.log('fail!');
}

 console.log('-----includes(), like contains in java, RT: boolean ------'+'\n');

 let conatainsLikeJava = days.includes('thrusday'); //  JS is case sensitive.
console.log(conatainsLikeJava); //true


console.log('---imp:**** occcurance index----');

let msg=['hi','hello','bye','good','hello','Hola','hello'];
//1st occurance:
let indx =msg.indexOf('hello');
console.log(indx); //1
//2nd occurance:
let value= msg.indexOf('hello',indx+1);
console.log(value); //4
//3rd occurance:
let va =msg.indexOf('hello',value+1);
console.log(va); //6
console.log(msg.indexOf('hello')+1);

//occurance of : hello : using for loop

let count=0;
for(let ele of msg){

    if (ele==='hello') {
        count++;
    }
    
}
 console.log('Count of hello is: '+count);
 
 console.log(typeof([])); //object
 console.log([]==0); //true, coz array is converted to string '' = empty =0=0
 console.log([]==[]); //false , object can not be same have diff reference var in memory