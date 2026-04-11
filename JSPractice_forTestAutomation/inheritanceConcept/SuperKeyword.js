
// Inheritance with super:
class AICTE {

    approved() {
        console.log('Approval need for registerd/ legal ways...');
    }
    domain() {
        console.log('Technical domain...');

    }
}

class University extends AICTE {

    Makaut() {
        console.log('Admission under MAKAUT......');

    }

    Karnataka() {
        console.log('Admission under MAKAUT......');
    }

    NIOS() {
        console.log('Admission under NIOS......');
    }

    Jadavpur() {
        console.log('Admission under JADAVPUR......');
    }
    Besu() {
        console.log('Admission under BESU......');
    }
    


}

class BengalCollege extends University {
    BCET() {
        console.log('I am Bengal college of engineering and technology...');

    }

    // Overriden method:
    //using super keyword: applicable only for methods ont for variable.
    // if want to get overriden implimentation along with parent class implimentatipon.


    approved() {

        super.approved(); // have to use inside the method.

        console.log('Approval getting, we are authorized...');
    }

}

export { AICTE, University , BengalCollege };