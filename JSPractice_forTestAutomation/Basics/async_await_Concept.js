
function getUser(){

    return new Promise((resolve,rejected)=>{
        console.log('Inside promise section..');
        setTimeout(() => {
            let sucess =true;  // make this false also and check.
            if (sucess) {
                resolve('I am done!')
            } else {
                rejected('404 not found!!')
            }
        }, 3000);
    })

}

//calling the function -- return promises.
getUser()
.then( (user) =>{  //--for resolve gives the value to then. 'I am done! goes to then.
console.log(user);
} )
.catch((error) =>{ //--for reject ives the value to catch. 404 not found!! goes to catch.
console.log(error);
} );

console.log('------------------------------------');


// using now async and await: creation of a custom function.

async function getUserDetails(){
 try {
    let user = await getUser();
    console.log(user);
    
 } catch (error) {
    console.log(error);
    
 }
    //--returns promise, so use await 
    // user variable  will ba updated only if promise is resolved, or else (for rejected) throw error 
    // so use: try catch block, if promise is rejected, the it comes to catch block.
}
//calling custom function:
getUserDetails();