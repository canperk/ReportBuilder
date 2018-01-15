<template>
    <div class="pageContainer">
        <div class="mainProperties">
            <ribbon v-bind="{added, removed}"></ribbon>
        </div>
        <div class="rulerContainer">
        </div>
        <div class="workPanel">
            <div class="panelTitle"></div>
            <div class="panelContent">
                <document ref="doc"></document>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    import Document from "./document.vue";
    import Ribbon from "./ribbon.vue";

    @Component({
        components: {
            Ribbon,
            Document
        }
    })
    export default class NewTemplate extends Vue {
        added = (): void => {
            this.$refs.doc.count++;
        }

        removed = (): void => {
            this.$refs.doc.count--;
        }

        $refs: {
            doc: Document
        }
    }
</script>
<style>
    @import url('../../wwwroot/css/newTemplate.css');
</style>