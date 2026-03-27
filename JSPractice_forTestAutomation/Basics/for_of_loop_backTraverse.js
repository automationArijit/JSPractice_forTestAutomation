// backward traversing using for..of loop:

let data =['mackbook','ipad','iphone','Android','windows']

let rev= data.length-1;

for(let ele of data){

  console.log(data[rev]);
  rev--;
  
}

let days= ['monday','tuesday','wednesday','thrusday','friday'];

//Using for in loop: 
let reverse = days.length-1;

for(let ele in days){
    ele=reverse;
    console.log(days[ele]);
    reverse--;
}

//For in loop: not print only index also print items/data

for(let e in data){

    console.log('The item: '+data[e]+' index having: '+e);
    
}
