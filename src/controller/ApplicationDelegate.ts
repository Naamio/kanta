/** 
 * `ApplicationDelegate` manages the lifecycle conditioning of the 
 * **Kanta** application. 
 */
interface ApplicationDelegate {
    /** 
     * Invoked when all pre-load conditions have successfully been met,
     * before the application is considered loaded.
     */
    applicationWillLaunch();

    /** 
     * Invoked when an application has completed all pre-load conditions,
     * has notified the invoking code, and has not been interrupted. At
     * this point the application is ready for use.
     */
    applicationDidLaunch();

    /**
     * Although not required, this method allows the application lifecycle
     * condition to be measured and checked, notifying invoking methods.
     * @param runnable Pre-load code block to execute whilst building the 
     * application.
     */
    run(runnable: () => void);
}

export default ApplicationDelegate;