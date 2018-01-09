import Vue from "vue";
export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data: function () {
        return {
            enthusiasm: this.initialEnthusiasm,
        };
    },
    methods: {
        increment: function () { this.enthusiasm++; },
        decrement: function () {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks: function () {
            return new Array(this.enthusiasm + 1).join('!');
        }
    },
    template: "\n    <div>\n        <div class=\"greeting\">Hello {{name}}{{exclamationMarks}}</div>\n        <button @click=\"decrement\">-</button>\n        <button @click=\"increment\">+</button>\n    </div>"
});
//# sourceMappingURL=hello.js.map