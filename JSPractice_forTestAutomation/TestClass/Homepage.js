// In same package: use only "./filename.js"
// In different package: use only "../packagename/filename.js"

import { Utilbasic,age } from "../UtilLearning/testUtil.js"; //Have to import age sepaately, coz its outside of class.

let util = new Utilbasic();

util.createData();
 Utilbasic.deleteeData(); //statc: so use classname.methodName
 util.writeData();
 console.log(Utilbasic.count);
 console.log(age); //30
 
 //Here we already have ref var of the class  Utilbasic ----- util, we can use it insted un (pass by referance)
 // util will given to print method , "tu" also start refering  Utilbasic() class, as "util"

 Utilbasic.print(util); 
 //I am printing....
 //updating the log....


 
/*Static block will always execute at first....
creating the data.....
deleting the data.....
writing the data.....
updating the data.....
0 */

//****** IMPORTANT RULES TO REMEMER**********
// Static to static Calling ==>> USING CLASS NAME
// Non static to Non static Calling  ==>> USING THIS KEYWORD.
// Non static calling Static   ==>> USING CLASS NAME
// Static calling  Non static  ==>> 1. creating oject of the class, or 2. call by referance.


