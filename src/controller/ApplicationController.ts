abstract class ApplicationController implements ApplicationDelegate {
    
    private readonly runnable: () => void;

    constructor(runnable: () => void) {
        this.runnable = runnable;
    }

    applicationWillLaunch() {
        throw new Error("Method not implemented.");
    }
    
    applicationDidLaunch() {
        throw new Error("Method not implemented.");
    }

    private run(runnable: () => void) {
        if (this.runnable) {
            runnable();
        }
    }
}

export default ApplicationController;