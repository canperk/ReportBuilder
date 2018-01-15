import Vue from "vue";
import Document from "./document.vue";
export default class NewTemplate extends Vue {
    added: () => void;
    removed: () => void;
    $refs: {
        doc: Document;
    };
}
