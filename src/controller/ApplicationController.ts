import ApplicationDelegate from "./ApplicationDelegate";

abstract class ApplicationController implements ApplicationDelegate {
    
    static shared: ApplicationController;

    private _runnable: () => void;

    constructor() {
        ApplicationController.shared = this;
    }

    applicationWillLaunch() {
        throw new Error("Method not implemented.");
    }
    
    applicationDidLaunch() {
        throw new Error("Method not implemented.");
    }

    run(runnable: () => void) {
        this._runnable = runnable;

        if (this._runnable) {
            runnable();
        }
    }
}

export default ApplicationController;