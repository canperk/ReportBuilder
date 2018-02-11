export var Helper;
(function (Helper) {
    var Guid = /** @class */ (function () {
        function Guid() {
        }
        Guid.newGuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        return Guid;
    }());
    Helper.Guid = Guid;
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.defautlFontFamily = "Segoe UI";
        Constants.defaultFontSize = "12px";
        return Constants;
    }());
    Helper.Constants = Constants;
})(Helper || (Helper = {}));
//# sourceMappingURL=Helpers.js.map