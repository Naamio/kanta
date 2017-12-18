class NotificationName extends String {
    constructor(name: string) {
        super(name);
    }
}

class Notification {

    name: NotificationName;

    object: any | undefined;

    userInfo: { [index: string]: any } | undefined;

    constructor(name: NotificationName, object: any | undefined, userInfo: { [index: string]: any } | undefined) {
        this.name = name;
        this.object = object;
        this.userInfo = userInfo;
    }
}

export default Notification;

export {
    Notification,
    NotificationName
}

