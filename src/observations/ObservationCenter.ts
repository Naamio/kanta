import log from "tipu";

import { OperationQueue } from "../tasks";

import { Observation, ObservationName } from "./Observation";


class ObservationCenter {
    
    private static _default = new ObservationCenter();

    static get defaultCenter(): ObservationCenter {
        return ObservationCenter._default;
    }

    private _observers: { observer: any, name: ObservationName | undefined, selector: (Observation) => void, object: any | undefined }[] = [];

    private constructor() {

    }

    /**
     * Adds an entry to the observation center's dispatch table that 
     * includes a observation queue and a block to add to the queue, 
     * and an optional observation name and sender.
     */
    addObserverForBlock(name: ObservationName | undefined, object: any | undefined, queue: OperationQueue | undefined, block: (Observation) => void) {        
        this._observers.push({
            observer: this,
            name: name,
            selector: block,
            object: object
        });
    }

    /**
     * Adds an entry to the notification center's dispatch table with an 
     * observer and a notification selector, and an optional notification 
     * name and sender.
     */
    addObserver(observer: any, name: ObservationName | undefined, selector: (Observation) => void, object: any | undefined) {
        this._observers.push({
            observer: observer,
            name: name,
            selector: selector,
            object: object
        });
    }

    /**
     * Removes all entries specifying a given observer from the notification 
     * center's dispatch table.
     */
    removeObserver(observer: any, name: ObservationName | undefined, object: any | undefined) {
        this._observers
            .filter(observer => ((observer == observer) && (observer.name!.equals(name!))))
            .forEach(observable => {
                var index = this._observers.indexOf(observable, 0);
                if (index > -1) {
                    this._observers.splice(index, 1);
                }
            });
    }

    /**
     * Posts a given observation to the observation center.
     */
    postObservation(observation: Observation) {
        this._observers
            .filter(observable => (observation.name.equals(observable.name!)))
            .forEach(observable => {
                observable.selector(observation);
            });
    }

    /**
     * Creates a observation with a given name, sender, and information 
     * and posts it to the observation center.
     */
    post(name: ObservationName, object: any | undefined, userInfo: Map<string, any> | undefined = undefined) {
        var observation = new Observation(name, object, userInfo);

        this.postObservation(observation);
    }
}

export default ObservationCenter;