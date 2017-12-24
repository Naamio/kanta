class ObservationName {

    static isEqual(name: ObservationName, candidate: ObservationName): boolean {
        return (name.toString() === candidate.toString());
    }

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    toString(): string {
        return this._name;
    }

    equals(candidate: ObservationName): boolean {
        return ObservationName.isEqual(this, candidate);
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

