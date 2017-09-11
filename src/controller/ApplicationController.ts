import ApplicationDelegate from "./ApplicationDelegate";

abstract class ApplicationController implements ApplicationDelegate {
    
<<<<<<< HEAD
    static shared: ApplicationController;

    private _runnable: () => void;

    constructor() {
        ApplicationController.shared = this;
=======
    private runnable: () => void;

    constructor() {
>>>>>>> 0ca6f44... Removed function from ApplicationController constructor params.
    }

    applicationWillLaunch() {
        throw new Error("Method not implemented.");
    }
    
    applicationDidLaunch() {
        throw new Error("Method not implemented.");
    }

    run(runnable: () => void) {
<<<<<<< HEAD
        this._runnable = runnable;

        if (this._runnable) {
=======
        this.runnable = runnable;

        if (this.runnable) {
>>>>>>> 0ca6f44... Removed function from ApplicationController constructor params.
            runnable();
        }
    }
}

export default ApplicationController;