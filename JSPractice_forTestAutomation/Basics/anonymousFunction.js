//Anonymous Function: The function have no name.
// This function have no name:
// Hoisting not allowed: only possible for named function.

let say = function(){
console.log('Hello world!');

}
say();

/**
 * 
 * @param {string} browsername 
 */
let isBrowserLaunch = function (browsername){
  console.log('The browser name is :'+browsername);

  switch (browsername.trim().toLocaleLowerCase()) {
    case 'chrome': console.log('Launch chrome browser');
    return true;
    case 'firefox': console.log('Launch firefox browser');
    return true;
    default: console.log('==Invalid browser== '+browsername );
    return false;
  }
  
}
isBrowserLaunch('ie');

if (isBrowserLaunch===true) {
    console.log('Enter the url');
    
}
else{
     console.log('Do not Enter the url');
}

