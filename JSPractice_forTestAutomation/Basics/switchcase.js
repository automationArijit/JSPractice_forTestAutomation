// Directly jump to the condition which satisfied.

let browser = 'Safari   ';

switch (browser.toLowerCase().trim()) {
    case 'chrome': console.log('Launch chrome browser.');
        break;
    case 'firefox': console.log('Launch firefox browser.');
        break;
    case 'edge': console.log('Launch edge browser.');
        break;
    case 'safari': console.log('Launch safari browser.');
        break;    

    default: console.log('Plz pass he correct browser: '+browser);
        break;
}
// What if we not write break: it prints every lines, go to each case.
console.log('==the condition which satisfied and below all will print ==');

let day= 'tuesday';

switch (day) {
    case 'sunday': console.log('Passing day is : sunday');
     //break;
    case 'monday': console.log('Passing day is : monday');
     //break;
    case 'tuesday': console.log('Passing day is :tuesday');
     //break;
    case 'wednesday': console.log('Passing day is :wednesday');
     //break; 
    case 'thrusday': console.log('Passing day is :thrusday');
     //break;
    case 'friday': console.log('Passing day is :friday');
    // break;
    case 'saturday': console.log('Passing day is :saturday');
     //break; 

    default: console.log('Plz pass valid day :'+day);
        //break;
     case 'Holiday': console.log('Passing day is :holyday');  
     //break;
     // In JS its possible to write case: after default.
}

console.log('===switch case with number===');

let num=100;

switch (num) {
    case 80: console.log('Hi');
     break;
    case 60: console.log('Hello');
     break;
    case 50: console.log('Hola');
     break;
    default: console.log('Nothing');
        break;
}

console.log('===switch case with boolean===');

let isActive =true;

switch (isActive) {
    case true: console.log('Pass!'); //  case 1: if we write it will go to default
    break;
    case false: console.log('Fail!'); //  case 0: if we write it will go to default
    break;

    default: console.log('Unknown:Pass/Fail'); 
    break;
}
// Bollean concept: 0=false, 1=true, not work for switch case.

// 1. Use case of switch case / real world scenarios: 
// 2. cross browser logic 
// 3. cross platform/os : windows, linux, mac  
// 4. cross system : local, remote 
// 5. cross environment: dev, qa, staging, prod .
// 6. RBAC : user permission: admin, customer, seller, partner, vendor, distributor, guest. 
// 7. Locator strategy : id, name, role, xpath, text, css 
// 8. Testing type: smoke, sanity, regression, integration, ui, api, mobile. 
// 9. ola/uber/rapido: mini, sedun, suv.
// 10. Payment: upi, credit card, debit card, paypall.

// if else real time example: marks geade (A, A++,A+,B,C) , Vote age, Marrage age







