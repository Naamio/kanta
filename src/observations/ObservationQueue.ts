import log from "tipu";

import ObservationCenter from "./ObservationCenter";
import Observation from "./Observation";

class ObservationQueue {

    private static _default: ObservationQueue = new ObservationQueue(ObservationCenter.defaultCenter);

    /**
     * Returns the default observation queue.
     */
    static get default(): ObservationQueue {
        return ObservationQueue._default;
    }

    private _observationCenter: ObservationCenter;

    /**
     * Initializes and returns a observation queue for the specified observation center.
     */
    constructor(observationCenter: ObservationCenter) {
        this._observationCenter = observationCenter;
    }

    /**
     * Adds a observation to the observation queue with a specified posting style.
     */
    enqueue(observation: Observation, postingStyle: PostingStyle) {

    }

    /**
     * Adds a observation to the observation queue with a specified posting style, 
     * and criteria for coalescing.
     */
    enqueueWithCoalesce(observation: Observation, postingStyle: PostingStyle, coalesceMask: ObservationCoalescing) {

    }
}

/**
 * The constants that specify when notifications are posted.
 */
enum PostingStyle {
    /**
     * The notification is posted when the run loop is idle.
     */
    whenIdle = 1,
    /**
     * The notification is posted at the end of the current notification callout or timer.
     */
    asap = 2,
    /**
     * The notification is posted at the end of the current notification callout or timer.
     */
    now = 3
}

enum ObservationCoalescing {
    /**
     * Do not coalesce observations in the queue.
     */
    none = 1,
    /**
     * Coalesce observations with the same name.
     */
    onName = 2,
    /**
     * Coalesce observations with the same object.
     */
    onSender = 3
}

export default ObservationQueue;

export {
    ObservationCoalescing,
    ObservationQueue,
    PostingStyle
}