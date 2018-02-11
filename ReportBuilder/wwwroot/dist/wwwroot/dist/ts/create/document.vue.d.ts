import Vue from "vue";
export default class Document extends Vue {
    showHeader: Boolean;
    showFooter: Boolean;
    components: Array<any>;
    create<T>(type: (new () => T)): void;
}
