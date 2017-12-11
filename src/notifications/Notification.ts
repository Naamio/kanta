class Name extends String {

}

class Notification {

    name: Name;

    object: any | undefined;

    userInfo: { [index: string]: any } | undefined;

    constructor(name: Name, object: any | undefined, userInfo: { [index: string]: any } | undefined) {
        this.name = name;
        this.object = object;
        this.userInfo = userInfo;
    }
}

export default Notification;

export {
    Name,
    Notification
}

