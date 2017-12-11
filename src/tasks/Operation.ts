abstract class Operation {

    protected _cancelled = false;

    protected _executing = false;

    protected _finished = false;

    protected _concurrent = false;

    protected _asynchronous = false;

    protected _ready = false;

    protected _dependencies: Operation[] = [];

    /**
     * A Boolean value indicating whether the operation has been cancelled
     */
    get isCancelled(): boolean {
        return this._cancelled;
    }

    /**
     * A Boolean value indicating whether the operation is currently executing. 
     */
    get isExecuting(): boolean {
        return this._executing;
    }

    /**
     * A Boolean value indicating whether the operation has finished executing its task.
     */
    get isFinished(): boolean {
        return this._finished;
    }

    /**
     * A Boolean value indicating whether the operation executes its task asynchronously.
     */
    get isConcurrent(): boolean {
        return this._concurrent;
    }

    /**
     * A Boolean value indicating whether the operation executes its task asynchronously.
     */
    get isAsynchronous(): boolean {
        return this._asynchronous;
    }

    /**
     * A Boolean value indicating whether the operation can be performed now. 
     */
    get isReady(): boolean {
        return this._ready;
    }

    /**
     * The name of the operation.
     */
    name: string | undefined;

    /** 
     * Begins the execution of the operation.  
     */
    start() { }

    /**
     * Performs the receiver’s non-concurrent task.
     */
    main() { }

    /**
     * The block to execute after the operation’s main task is completed.
     */
    completionBlock(): (() => void) | undefined {
        return undefined;
    }

    /**
     * Advises the operation object that it should stop executing its task.
     */
    cancel() { }

    /// MARK: - Managing Dependencies

    /**
     * An array of the operation objects that must finish executing before 
     * the current object can begin executing.
     */
    get dependencies(): Operation[] {
        return this._dependencies;
    }

    /**
     * Makes the receiver dependent on the completion of the specified operation.
     */
    addDepencency(operation: Operation) {
        this.dependencies.push(operation);
    }

    /**
     * Removes the receiver’s dependence on the specified operation.
     */
    removeDependency(operation: Operation) {
        var index = this._dependencies.indexOf(operation, 0);
        if (index > -1) {
            this._dependencies.splice(index, 1);
        }
    }
}

export default Operation;