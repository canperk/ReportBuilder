export default class Init {
    static start(): void {
        window.onscroll = _ => {
            var content = document.getElementById("content");
            var navMenu = <HTMLElement>document.getElementsByClassName("navMenu")[0];
            var header = <HTMLElement>document.getElementsByClassName("header")[0];
            var footer = <HTMLElement>document.getElementsByClassName("footer")[0];
            if (content != null) {
                var rec = content.getBoundingClientRect();
                navMenu.style.left = (rec.left - 200) + "px";
                header.style.left = (rec.left - 200) + "px";
                footer.style.left = (rec.left - 200) + "px";
            }
        }
    }
}
