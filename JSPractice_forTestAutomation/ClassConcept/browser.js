// All private methos can be accessed inside the public method ---Encapsulation.
class browser{

    launchrowser(){
     console.log('Launching chrome browser...');
     this.#checkRam();
     this.#checkVersionUpdate();
     this.#checkOScompatile();
     this.#checkNewUpdates();
     console.log('Chrome is launched..');
     
    }
    // private method:
    #checkRam(){
      console.log('Checking system RAM...');
    }
    // private method:
    #checkVersionUpdate(){
       console.log('Checking version of the browser...');
    }
    // private method:
    #checkOScompatile(){
        console.log('OS is compatile...');
    }
    // private method:
    #checkNewUpdates(){
         console.log('Checking new updates from marketplace...');
    }

}
let  br = new browser();
br.launchrowser();

