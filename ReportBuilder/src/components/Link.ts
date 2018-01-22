import { TextBase } from "./TextControls"
export default class Link extends TextBase {
    constructor() {
        super();
        this.href = "#";
        this.target = "";
    }

    public href: string;
    public target: string;
}