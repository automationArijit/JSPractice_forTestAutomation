// nested if condition: if - if if - else - if if - else
let marks =56;

if (marks>=90) {
    console.log(`grade is : 'A'`);

    if (marks>95) {

        console.log(`grade is : 'A++'`);
               
        if (marks===100) {

            console.log(`Getting scholership`);
            
        }
    }
    
}

else{
    if (marks>=80) {
        console.log('Grade is: B');
        
    } else {
        if (marks>=70) {
             console.log('Grade is: C');
        }
        else{
            if (marks>=50) {
                 console.log('Grade is: D');
            }
            else{
                if (marks>=40) {
                     console.log('Grade is: E');
                }
                else{
                     console.log('Fail: Try next time');
                }
            }
        }
        
    }

}