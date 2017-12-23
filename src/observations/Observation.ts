class ObservationName extends String {
    constructor(name: string) {
        super(name);
    }
}

class Observation {

    name: ObservationName;

    object: any | undefined;

    userInfo: { [index: string]: any } | undefined;

    constructor(name: ObservationName, object: any | undefined, userInfo: { [index: string]: any } | undefined) {
        this.name = name;
        this.object = object;
        this.userInfo = userInfo;
    }
}

export default Observation;

export {
    Observation,
    ObservationName
}

