import log from "tipu";

import { OperationQueue } from "../tasks";

import { Notification, NotificationName } from "./Notification";


class NotificationCenter {
    
    private static _default = new NotificationCenter();

    static get defaultCenter(): NotificationCenter {
        return NotificationCenter._default;
    }

    private _observers: { observer: any, name: NotificationName | undefined, selector: (Notification) => void, object: any | undefined }[] = [];

    private constructor() {

    }

    /**
     * Adds an entry to the notification center's dispatch table that 
     * includes a notification queue and a block to add to the queue, 
     * and an optional notification name and sender.
     */
    addObserverForBlock(name: NotificationName | undefined, object: any | undefined, queue: OperationQueue | undefined, block: (Notification) => void) {        
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
    addObserver(observer: any, name: NotificationName | undefined, selector: (Notification) => void, object: any | undefined) {
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
    removeObserver(observer: any, name: NotificationName | undefined, object: any | undefined) {

    }

    /**
     * Posts a given notification to the notification center.
     */
    postNotification(notification: Notification) {
        this._observers
            .filter(observable => observable.name === notification.name)
            .forEach(observable => observable.selector(notification));
    }

    /**
     * Creates a notification with a given name, sender, and information 
     * and posts it to the notification center.
     */
    post(name: NotificationName, object: any | undefined, userInfo: { [index: string] : any } | undefined = undefined) {
        var notification = new Notification(name, object, userInfo);

        this.postNotification(notification);
    }
}

export default NotificationCenter;