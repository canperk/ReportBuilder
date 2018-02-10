<template>
    <div class="documentContainer">
        <div class="docHeader" v-if="showHeader"></div>
        <div class="docContent">
            <div v-for="c in components" class="component">
                <component v-bind:is="c.type"></component>
            </div>
        </div>
        <div class="docFooter" v-if="showFooter"></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    import { ComponentBase } from "../components/TextControls"
    import ReportHeader from "../components/Header.vue"
    import ReportLink from "../components/Link.vue"
    import ReportTable from "../components/ReportTable.vue"
    @Component({
        components: {
            ReportLink,
            ReportHeader,
            ReportTable
        }
    })
    export default class Document extends Vue {
        public showHeader: Boolean = false; 
        public showFooter: Boolean = false;
        public components: Array<any> = [];

        create<T>(type: (new () => T)): void {
            let t = new type();
            this.components.push(t);
        }
    }
</script>