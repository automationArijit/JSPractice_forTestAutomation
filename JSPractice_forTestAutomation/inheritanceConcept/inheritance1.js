

// Mutiple level inheritance is not possible in JS
// Single, multi level and herarical level is possible in JS.

class Automobile {

    shoker() {
        console.log('Automobile engg need to make shoker..');

    }
}



class Vehicle extends Automobile {

    speed = 10; // Inside class we do not have to specify the type of var ( let/var/const)

    start() {
        console.log('Starting the vehicle....');

    }

    stop() {
        console.log('Stoping the vehicle....');
    }

    refuel() {
        console.log('Refuel the vehicle....');
    }

    shoker() {
        console.log('Engg need to make shoker for car..');

    }

}

class BMW extends Vehicle {

    speed = 80;

    // Mehod overriding :
    start() {
        console.log('Starting the BMW....');
    }
    // Own method of BMW:
    engine() {
        console.log('Having own BMW engine.');

    }
    musicSystem() {
        console.log('Having own BMW music system...');
    }

}

// Overriding is only for methods, not for variable

export { Vehicle, BMW };