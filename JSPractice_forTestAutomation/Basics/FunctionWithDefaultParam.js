//Function with default param:
/**
 * 
 * @param {string} name 
 */
function Print(name='raja'){
 console.log('The name is: '+name);
 
}
Print();//The name is: raja  : Nothing in param , so the default is printed.
Print('ram');// The name is: ram : Passing a string argument so the updated value is printed.

console.log('------------------------------------------------------------');

/**
 * 
 * @param {string} envname 
 */
function environmentLaunch(envname='qa'){
 console.log('The environment name is: '+envname);
 
switch (envname.trim().toLocaleLowerCase()) {
    case 'Staging': console.log('Open Staging environment.');
        break;
    case 'integration': console.log('Open integration environment.');
        break;
    case 'dev': console.log('Open dev environment.');
        break;
    case 'uat': console.log('Open uat environment.');
        break;
    case 'production': console.log('Open production environment.');
        break;
    default: console.log('==Invalid environment==, go with default: qa');
        break;
}
}
environmentLaunch('Production');
environmentLaunch();

console.log('------------------------------------------------------------------------');

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function numberCalculation(a=0,b=0){
    console.log(`The sum of ${a} and ${b} is:= `+(a+b));
    console.log(`The sub of ${a} and ${b} is:= `+(a-b));
    console.log(`The mult of ${a} and ${b} is:= `+(a*b));
    console.log(`The div of ${a} and ${b} is:= `+(a/b));
}
numberCalculation(10,5);