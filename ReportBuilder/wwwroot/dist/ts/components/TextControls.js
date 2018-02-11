var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Enums } from "./Enums";
import { Helper } from "../helpers/helpers";
import Vue from "vue";
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super.call(this) || this;
        _this.id = Helper.Guid.newGuid();
        _this.left = 100;
        _this.top = 100;
        return _this;
    }
    return ComponentBase;
}(Vue));
var TextBase = /** @class */ (function (_super) {
    __extends(TextBase, _super);
    function TextBase() {
        var _this = _super.call(this) || this;
        _this.textColor = Enums.Color.Black;
        _this.fontFamily = Helper.Constants.defautlFontFamily;
        _this.fontSize = Helper.Constants.defaultFontSize;
        _this.textAlign = Enums.TextAlign.Left;
        return _this;
    }
    return TextBase;
}(ComponentBase));
export { ComponentBase, TextBase };
//# sourceMappingURL=TextControls.js.map