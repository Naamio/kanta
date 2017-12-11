import Operation from "./Operation";

/**
 * After being added to an operation queue, an `Operation` instance 
 * remains in that queue until it is explicitly canceled or finishes 
 * executing its task. Operations within the queue (but not yet executing) 
 * are themselves organized according to priority levels and inter-operation 
 * object dependencies and are executed accordingly. An application may 
 * create multiple operation queues and submit operations to any of them. 
 * 
 * Inter-operation dependencies provide an absolute execution order for 
 * operations, even if those operations are located in different operation 
 * queues. An operation object is not considered ready to execute until all 
 * of its dependent operations have finished executing. For operations that 
 * are ready to execute, the operation queue always executes the one with 
 * the highest priority relative to the other ready operations. For details 
 * on how to set priority levels and dependencies, see `Operation`.
 * 
 * You cannot directly remove an operation from a queue after it has been added. 
 * An operation remains in its queue until it reports that it is finished with 
 * its task. Finishing its task does not necessarily mean that the operation 
 * performed that task to completion. An operation can also be canceled. 
 * Canceling an operation object leaves the object in the queue but notifies the 
 * object that it should abort its task as quickly as possible. For currently 
 * executing operations, this means that the operation object’s work code must 
 * check the cancellation state, stop what it is doing, and mark itself as 
 * finished. For operations that are queued but not yet executing, the queue 
 * must still call the operation object’s start method so that it can processes 
 * the cancellation event and mark itself as finished.
 */
class OperationQueue {

    private static _current: OperationQueue | undefined;

    private static _main: OperationQueue = new OperationQueue()

    /**
     * Returns the operation queue that launched the current operation.
     */
    static get current(): OperationQueue | undefined {
        if (!this._current) {
            OperationQueue._current = new OperationQueue();
        }

        return OperationQueue._current;
    }

    /**
     * Returns the operation queue associated with the main thread. 
     */
    static get main(): OperationQueue {
        return OperationQueue._main;
    }

    /**
     * The maximum number of queued operations that can execute at the same time.
     */
    maxConcurrentOperationCount: number;

    /**
     * The name of the operation queue.
     */
    name: string | undefined;

    private _operations: Operation[] = [];

    /**
     * An array of the operations currently in the queue.
     */
    get operations(): Operation[] {
        return this._operations;
    }

    /**
     * The number of operations currently in the queue.
     */
    get operationCount(): number {
        return this._operations.length;
    }

    /**
     * Adds the specified operation object to the receiver.
     */
    addOperation(operation: Operation) {
        this._operations.push(operation);
    }

    /**
     * Adds the specified array of operations to the queue.
     */
    addOperations(operations: Operation[], waitUntilFinished: boolean) {
        this._operations.concat(operations);
    }

    /**
     * Wraps the specified block in an operation object and adds it to the receiver.
     */
    addOperationAsFunction(func: (() => void)) {
        var operation = new QueueOperation(func);

        this._operations.push(operation);
    }

    /**
     * Cancels all queued and executing operations.
     */
    cancelAllOperations() {
        this._operations.forEach((operation, index) => {
            operation.cancel();
        });
    }

    /**
     * Blocks the current thread until all of the receiver’s 
     * queued and executing operations finish executing.
     */
    waitUntilAllOperationsAreFinished() {

    }
}

/**
 * Private operation for use within the `OperationQueue`. Provides
 * sensible defaults to an operation so that the `OperationQueue` 
 * can create a new `Operation` from a closure function.
 */
class QueueOperation extends Operation {

    private _operation: () => void;

    constructor(operation: () => void) {
        super();

        this._operation = operation;
    }

    main() {
        if (this.isCancelled) {
            this._finished = true;
            return;
        }

        this._executing = true;

        this._operation();

        this._executing = false;
        this._finished = true;
    }
}

export default OperationQueue;