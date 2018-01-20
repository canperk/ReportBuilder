var Init = /** @class */ (function () {
    function Init() {
    }
    Init.start = function () {
        window.onscroll = function (_) {
            var content = document.getElementById("content");
            var navMenu = document.getElementsByClassName("navMenu")[0];
            var header = document.getElementsByClassName("header")[0];
            var footer = document.getElementsByClassName("footer")[0];
            if (content != null) {
                var rec = content.getBoundingClientRect();
                navMenu.style.left = (rec.left - 200) + "px";
                header.style.left = (rec.left - 200) + "px";
                footer.style.left = (rec.left - 200) + "px";
            }
        };
    };
    return Init;
}());
export default Init;
//# sourceMappingURL=site.js.map