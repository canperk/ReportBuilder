; (function () {
    window.onscroll = function () {
        var content = document.getElementById("content");
        var navMenu = document.getElementsByClassName("navMenu")[0];
        var header = document.getElementsByClassName("header")[0];
        var footer = document.getElementsByClassName("footer")[0];
        var rec = content.getBoundingClientRect();
        navMenu.style.left = (rec.left - 200) + "px";
        header.style.left = (rec.left - 200) + "px";
        footer.style.left = (rec.left - 200) + "px";
    }
})();