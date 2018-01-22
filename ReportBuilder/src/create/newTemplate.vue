<template>
    <div class="pageContainer">
        <div class="mainProperties">
            <ribbon v-bind="{added, removed, toggleHeader, toggleFooter}"></ribbon>
        </div>
        <div class="rulerContainer">
            <document ref="doc"></document>
        </div>
        <properties></properties>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    import Document from "./document.vue";
    import Ribbon from "./ribbon.vue";
    import Properties from "./properties.vue";
    import Header from "../components/Header.vue"
    import Link from "../components/Link"
    require("../../wwwroot/dist/site")
    @Component({
        components: {
            Ribbon,
            Document,
            Properties
        }
    })
    export default class NewTemplate extends Vue {
        mounted(): void {
            $("body").createRuler();
        }
        added = (): void => {
            this.$refs.doc.count++;
            this.$refs.doc.create(Header);
        }

        removed = (): void => {
            this.$refs.doc.count--;
            this.$refs.doc.create(Link);
        }

        toggleHeader = (): void => {
            this.$refs.doc.showHeader = !this.$refs.doc.showHeader;
        }

        toggleFooter = (): void => {
            this.$refs.doc.showFooter = !this.$refs.doc.showFooter;
        }

        $refs: {
            doc: Document
        }
    }
</script>
<style>
    @import url('../../wwwroot/css/ruler.min.css');
    @import url('../../wwwroot/css/newTemplate.css');
</style>