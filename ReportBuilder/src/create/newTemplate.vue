<template>
    <div class="pageContainer">
        <div class="mainProperties">
            <ribbon v-bind="{addHeader, addLink, addTable, toggleHeader, toggleFooter}"></ribbon>
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
    import ReportHeader from "../components/Header.vue"
    import ReportLink from "../components/Link.vue"
    import ReportTable from "../components/ReportTable.vue"
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
        addHeader = (): void => {
            this.$refs.doc.create(ReportHeader);
        }

        addLink = (): void => {
            this.$refs.doc.create(ReportLink);
        }

        addTable = (): void => {
            this.$refs.doc.create(ReportTable);
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