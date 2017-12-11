import log from "tipu";

import { OperationQueue } from "../tasks";

import * as Notification from "./Notification";


class NotificationCenter {
    
    private static _default = new NotificationCenter();

    static get defaultCenter(): NotificationCenter {
        return NotificationCenter._default;
    }

    private constructor() {

    }

    /**
     * Adds an entry to the notification center's dispatch table that 
     * includes a notification queue and a block to add to the queue, 
     * and an optional notification name and sender.
     */
    addObserverForBlock(name: Notification.Name | undefined, object: any | undefined, queue: OperationQueue | undefined, block: (Notification)) {

    }

    /**
     * Adds an entry to the notification center's dispatch table with an 
     * observer and a notification selector, and an optional notification 
     * name and sender.
     */
    addObserver(observer: any, name: Notification.Name | undefined, selector: (Notification) => void, object: any | undefined) {

    }

    /**
     * Removes all entries specifying a given observer from the notification center's dispatch table.
     */
    removeObserver(observer: any, name: Notification.Name | undefined, object: any | undefined) {

    }

    /**
     * Posts a given notification to the notification center.
     */
    postNotification(notification: Notification) {

    }

    /**
     * Creates a notification with a given name, sender, and information 
     * and posts it to the notification center.
     */
    post(name: Notification.Name, object: any | undefined, userInfo: { [index: string] : any } | undefined = undefined) {
        
    }
}