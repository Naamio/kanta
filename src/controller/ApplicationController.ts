import ApplicationDelegate from "./ApplicationDelegate";

/** 
 * `ApplicationController` manages the lifecycle conditioning of the 
 * **Kanta** application. 
 */
abstract class ApplicationController implements ApplicationDelegate {
    
    private runnable: () => void;

    /** 
     * Initialises a new `ApplicationController` instance.
     */
    constructor() {
    }

    applicationWillLaunch() {
        throw new Error("Method not implemented.");
    }
    
    applicationDidLaunch() {
        throw new Error("Method not implemented.");
    }

    run(runnable: () => void = this.defaultRunnable) {
        this.runnable = runnable;

        if (this.runnable) {
            runnable();
        }
    }

    private defaultRunnable() {

    }
}

export default ApplicationController;