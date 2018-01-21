import Color from "./enums"
import { Guid } from "../helpers/helpers"
class ComponentBase {
    constructor() {
        this.id = Guid.newGuid();
        this.left = 100;
        this.top = 100;
    }
    public id: string;
    public left: number;
    public top: number;
}
class TextBase extends ComponentBase {
    constructor() {
        super();
        this.textColor = Color.Black;
    }
    public textColor: Color;
    public fontSize: number;
    public fontFamily: string;
}