import "mocha";
import { assert, expect } from "chai";

import { Observation, ObservationName } from "../../src/observations/Observation";
import ObservationCenter from "../../src/observations/ObservationCenter";

describe("Test Observation Center", () => {

    it("should create a default center", () => {
        assert.exists(ObservationCenter.defaultCenter);
    });

    it("should support subscribing to an Observation Center", () => {
        ObservationCenter.defaultCenter.addObserver(this, new ObservationName("test"), (observation) => {}, this);
    });

    it("should support posting to an Observation Center", () => {
        ObservationCenter.defaultCenter.post(new ObservationName("test"), this, undefined);
    });

    it("should support receiving from an Observation Center", (done) => {
        ObservationCenter.defaultCenter.addObserver(this, new ObservationName("test"), (observation) => {
            ObservationCenter.defaultCenter.removeObserver(this, new ObservationName("test"), this);
            done();
        }, this);

        ObservationCenter.defaultCenter.post(new ObservationName("test"), this, undefined);
    });

    it("should support sending myself to an Observation Center", (done) => {
        ObservationCenter.defaultCenter.addObserver(this, new ObservationName("test"), (observation) => {
            if (observation.object == this) {
                done();
            }
        }, this);

        ObservationCenter.defaultCenter.post(new ObservationName("test"), this, undefined);
    });
});
