import ApplicationDelegate from "./ApplicationDelegate";

abstract class ApplicationController implements ApplicationDelegate {
    
    private runnable: () => void;

    constructor() {
    }

    applicationWillLaunch() {
        throw new Error("Method not implemented.");
    }
    
    applicationDidLaunch() {
        throw new Error("Method not implemented.");
    }

    run(runnable: () => void) {
        this.runnable = runnable;

        if (this.runnable) {
            runnable();
        }
    }
}

export default ApplicationController;