// Implement the launch sequence function here and export it as the default export.

// The payload can be found in <code>payload/satellites.js</code>.
import { NFSAT, FISHSAT } from "./payload/satellites.js";

// The agreed upon countdown length is 5.

// The subroutine modules need to be included in the launchSequence.js file in the body of the launch() function. 
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

// Step 3:
function callingCountdownFiveTimes(countdownParameter) {
    // doing the loop:
    // variable n where it starts counting
    // n is position 1 -> array rules!!
    for (let n = 1;
        // the end where it should count
        n <= countdownParameter;
        // this says keep counting
        n++)
    // the return:
    {// the function i actually want to call:
        countdown();
    }
}

export default function launch() {
    // Step 1: Load Payload
    // core/load.js provides the loadPayload(payload) function.
    loadPayload(NFSAT);
    loadPayload(FISHSAT);

    // Step 2: Fueling
    // core/fuel.js provides the fuel() function. 
    fuel();

    // Step 3: Countdown
    // core/countdown.js provides the countdown() function. 
    // Each mission defines its own countdown length. 
    // The function has to be called as many times as required by the countdown length.    
    // // The agreed upon countdown length is 5.
    // countdown();
    // countdown();
    // countdown();
    // countdown();
    // countdown();
    // or with a loop 
    // creating a function to do this "callingCountdownFiveTimes"
    // call this function outside globally!
    // function callingCountdownFiveTimes() {}
    callingCountdownFiveTimes(5);

    // Step 4: Liftoff
    // core/liftoff.js provides the liftoff() function. 
    // It must be called after an appropriate countdown. 
    liftoff();

    // Step 5: Deploy 
    deployPayload();

}




