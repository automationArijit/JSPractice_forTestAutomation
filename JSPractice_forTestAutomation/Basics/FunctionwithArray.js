// Returns multiple values form a particular function:

/**
 * 
 * @param {string} empName 
 */
 function getEmpDevices(empName){
 
    console.log('Employee name is '+empName);

    let devices=[];

    switch (empName.trim().toLowerCase()) {
        case 'ram': devices.push('mackbook','ipad','iphone')
            break;
        case 'hanuman': devices.push('windows laptop','mouse','keyboard')
            break;
        case 'laxman': devices.push('android','cable','monitor')
            break;
        case 'sita': devices.push('RAM','ssd','harddisk')
            break;
        case 'radha': devices.push('cabinet','cooler','desk')
            break;
    
        default: console.log('Invalid emp name: '+empName);
            break;
    }
    return devices;
 }
 //calling the function:
 let outcomelist = getEmpDevices('hanuman');
 console.log(outcomelist);
 