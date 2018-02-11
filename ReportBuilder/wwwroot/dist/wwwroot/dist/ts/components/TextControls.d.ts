import { Enums } from "./Enums";
import Vue from "vue";
declare class ComponentBase extends Vue {
    constructor();
    id: string;
    type: string;
    left: number;
    top: number;
    width: number;
    height: number;
    isSelected: boolean;
    select: () => void;
}
declare class TextBase extends ComponentBase {
    constructor();
    textColor: Enums.Color;
    fontSize: string;
    fontFamily: string;
    textAlign: string;
    content: string;
}
export { ComponentBase, TextBase };
