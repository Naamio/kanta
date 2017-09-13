import Controller from "./Controller";
import { View } from "../view";

/**
 * `ViewController` is the building block for domain-specific processes
 * that require access to a visual element for control.
 */
abstract class ViewController extends Controller {
    
    /**
     * Root `View` element of the logic.
     */
    view: View | undefined;

}

export default ViewController;