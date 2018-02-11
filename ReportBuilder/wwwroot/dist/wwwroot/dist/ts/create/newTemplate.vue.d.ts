import Vue from "vue";
import { ComponentBase } from "../components/TextControls";
import Document from "./document.vue";
export default class NewTemplate extends Vue {
    mounted(): void;
    addHeader: () => void;
    addText: () => void;
    addLink: () => void;
    addTable: () => void;
    toggleHeader: () => void;
    toggleFooter: () => void;
    $refs: {
        doc: Document;
    };
    selectedItem: ComponentBase;
}
