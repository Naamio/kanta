import Controller from "./Controller";
import { View } from "../view";

abstract class ViewController extends Controller {
    
    view: View | null | undefined;

}

export default ViewController;