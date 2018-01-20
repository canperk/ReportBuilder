import Vue from "vue";
import Document from "./document.vue";
export default class NewTemplate extends Vue {
    mounted(): void;
    added: () => void;
    removed: () => void;
    $refs: {
        doc: Document;
    };
}
