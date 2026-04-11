
//Outside of the class defining a variable..
let age =30;  // To acces it in another package have to export separately, coz its not within the class .

console.log('Hello JS'); // No need to export/import , its outside of class..Automatically import/export, print first


class Utilbasic {

//public method:
createData(){
 console.log('creating the data.....');
 }
//public method:
readData(){
 console.log('reading the data.....');
 this.writeData(); // Non-static to Non-static calling => using this keyword
}
//public method:

// Non-static to Non-static calling => using this keyword
writeData(){
 console.log('writing the data.....');
this.#updateData();
}
//private method: using "#"
#updateData(){
 console.log('updating the data.....');
}

//private method: using "#"
#updateLog(){
     console.log('updating the log....');
}

//static method: only possile within the class

// static  to static calling => using class name
static deleteeData(){
 console.log('deleting the data.....');
}
//static variable:
static count =0;

//Static block: any way execute 1st --just like java: In latest JS from ES6 its available.
static {
 console.log('First Static block will always execute at first....');
 
}
static {
    console.log('Then next static block will execute....');
}

// Inside static method calling Non-static => 
    // 1. Either creating object of the class and using its ref var.
    // 2. Use comment documentation commments.

/**
 * 
 * @param {Utilbasic} un 
 */  
static print (un){
 console.log('I am printing....');
 un.#updateLog();
 
}

static drive (){
  console.log('I am driving....');
}

}

export {Utilbasic,age }; // have to export age separately.