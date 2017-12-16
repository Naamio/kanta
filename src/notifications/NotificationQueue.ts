import log from "tipu";

import NotificationCenter from "./NotificationCenter";

class NotificationQueue {

    private static _default: NotificationQueue = new NotificationQueue(NotificationCenter.defaultCenter);

    /**
     * Returns the default notification queue.
     */
    static get default(): NotificationQueue {
        return NotificationQueue._default;
    }

    private _notificationCenter: NotificationCenter;

    /**
     * Initializes and returns a notification queue for the specified notification center.
     */
    constructor(notificationCenter: NotificationCenter) {
        this._notificationCenter = notificationCenter;
    }

    /**
     * Adds a notification to the notification queue with a specified posting style.
     */
    enqueue(notification: Notification, postingStyle: PostingStyle) {

    }

    /**
     * Adds a notification to the notification queue with a specified posting style, 
     * and criteria for coalescing.
     */
    enqueueWithCoalesce(notification: Notification, postingStyle: PostingStyle, coalesceMask: NotificationCoalescing) {

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

enum NotificationCoalescing {
    /**
     * Do not coalesce notifications in the queue.
     */
    none = 1,
    /**
     * Coalesce notifications with the same name.
     */
    onName = 2,
    /**
     * Coalesce notifications with the same object.
     */
    onSender = 3
}

export default NotificationQueue;

export {
    NotificationCoalescing,
    NotificationQueue,
    PostingStyle
}