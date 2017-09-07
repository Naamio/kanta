import Vue, { VueConstructor } from "vue";

abstract class View {
    
    protected _vue: VueConstructor<Vue> | null | undefined;

    public get Vue() : VueConstructor<Vue> | null | undefined {
        return this._vue;
    }
}

export default View;