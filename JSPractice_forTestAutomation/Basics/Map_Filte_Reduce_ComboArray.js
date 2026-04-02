//Combinations:

let marks=[87,90,73,92,26,51,22,85,75,45,89];
// Get the passing score(>=70) , add 5 number as a bonus , then calculate the avg.

let finalresult = marks.filter( ele => ele>=70 )
                  .map( ele => ele+5 )
                  .reduce ( (sum,ele) => sum+ele, 0 )/ marks.filter( ele => ele>=70 ).length;
console.log(finalresult); //89.42857142857143

let prices =[25,20,82,15,58,69,72,8,92,45,52,89];
// Get the lower prices (<=50), apply 20% discount , then calculate the total.

let FinalPrice = prices.filter( ele => ele<=50 )
                 .map( e1 => e1*0.8 )
                 .reduce( (sum,e) =>sum+e,0 );

console.log(FinalPrice); // 90.4

// get the element size(>=4), make them in upper case, the join like: WDIO - SELENIUM - CYPRESS
let dict =['wdio','js','git','selenium','playwright','cypress'];
let output= dict.filter( ele =>ele.length>=4 )
            .map( ele =>ele.toUpperCase() )
            .reduce( (total,ele) => total+' - '+ele);

console.log(output);

                   