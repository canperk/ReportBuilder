import { Enums } from "./Enums"
import { Helper } from "../helpers/helpers"
class ComponentBase {
    constructor() {
        this.id = Helper.Guid.newGuid();
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
        this.textColor = Enums.Color.Black;
        this.fontFamily = Helper.Constants.defautlFontFamily;
        this.fontSize = Helper.Constants.defaultFontSize;
        this.textAlign = Enums.TextAlign.Left;
    }
    public textColor: Enums.Color;
    public fontSize: string;
    public fontFamily: string;
    public textAlign: string;
    public content: string;
}

export { ComponentBase, TextBase }