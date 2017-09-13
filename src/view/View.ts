import Vue, { VueConstructor } from "vue";

/**
 * View manages the visual logic, including event management.
 */ 
abstract class View { 

    /**
     * A local reference to a root `Vue` component for the 
     * `View`. Any `Vue` specific processing should be done
     * by abstraction, but a direct reference is available
     * when this is not suitable.
     */
    protected _vue: VueConstructor<Vue> | undefined;

    /**
     * The `Vue` component reference for instantiating the
     * Vue component within a Vue application process.
     */
    public get Vue() : VueConstructor<Vue> | undefined {
        return this._vue;
    }
}

export default View;