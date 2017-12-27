import "mocha";
import { assert, expect } from "chai";

import { Observation, ObservationName } from "../../src/observations/Observation";

describe("Test Observation", () => {

    it("should create a new Observation", () => {
        var observation = new Observation(new ObservationName("test observation"), null, undefined);

        assert.exists(observation, "observation exists");
        assert.notExists(observation.userInfo, "userInfo doesn't exist");
        expect(observation.name.toString()).to.equal("test observation");
    });

    it("should support userInfo in an Observation", () => {
        var userInfo = new Map<string, any>();

        userInfo["foo"] = "bar";

        var observation = new Observation(new ObservationName("test observation"), null, userInfo);

        assert.exists(observation.userInfo);
        if (observation.userInfo) {
            expect(observation.userInfo["foo"]).to.equal("bar");
        }
    });
});
