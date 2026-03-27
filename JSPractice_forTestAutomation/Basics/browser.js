// if -condition case

let browser='chrome';

if (browser==='chrome') {
    console.log('Launch chrome broeser'); 
    
}
if (browser==='firefox') {
    console.log('Launch firefox broeser');  // un necessary checking condition.
    
}
if (browser==='edge') {
    console.log('Launch edge broeser'); // un necessary checking condition.
    
}
if (browser==='safari') {
    console.log('Launch safari broeser'); // un necessary checking condition.
    
}
else{
    console.log('Please pass correct browser.'); // this else is part of last if block, browser==='safari'
    // as browser==='safari' not satisfied, it comes to else block and print the msg.
    //Its a bug in code, o/p = Launch chrome broeser' /n 'Please pass correct browser.'
}

console.log('== Isnted of that use else -if : For better performance ====');


let Browser='firefox';

if (Browser==='chrome') {
    console.log('Launch chrome broeser'); 
    
}
else if (Browser==='firefox') {
    console.log('Launch firefox broeser'); 
    
}
else if (Browser==='edge') {
    console.log('Launch edge broeser'); 
    
}
else if (Browser==='safari') {
    console.log('Launch safari broeser'); 
    
}
else{
    
    console.log('Please pass correct browser.'); 
}
