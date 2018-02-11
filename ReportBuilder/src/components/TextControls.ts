import { Enums } from "./Enums"
import { Helper } from "../helpers/helpers"
import Vue from "vue";
class ComponentBase extends Vue  {
    constructor() {
        super();
        this.id = Helper.Guid.newGuid();
        this.left = 100;
        this.top = 100;
        this.isSelected = false;
    }
    public id: string;
    public type: string;
    public left: number;
    public top: number;
    public width: number;
    public height: number;
    public isSelected: boolean;

    public select = () => {
        this.isSelected = true;
        this.width++;
    }
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