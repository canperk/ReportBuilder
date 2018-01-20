import Vue from "vue";
import Document from "./document.vue";
export default class NewTemplate extends Vue {
    mounted(): void;
    added: () => void;
    removed: () => void;
    toggleHeader: () => void;
    toggleFooter: () => void;
    $refs: {
        doc: Document;
    };
}
