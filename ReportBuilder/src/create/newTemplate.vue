<template>
    <div class="pageContainer">
        <div class="mainProperties">
            <ribbon v-bind="{added, removed}"></ribbon>
        </div>
        <div class="rulerContainer">
            <document ref="doc"></document>
        </div>
        <div class="workPanel">
            <div class="panelTitle"></div>
            <div class="panelContent">
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    import Document from "./document.vue";
    import Ribbon from "./ribbon.vue";
    require("../../wwwroot/dist/site")
    @Component({
        components: {
            Ribbon,
            Document
        }
    })
    export default class NewTemplate extends Vue {
        mounted(): void {
            $("body").createRuler();
        }
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
    @import url('../../wwwroot/css/ruler.min.css');
    @import url('../../wwwroot/css/newTemplate.css');
</style>