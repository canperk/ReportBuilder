<template>
    <div class="pageContainer">
        <div class="mainProperties">
            <ribbon name="rbn" :documentContainer="Document"></ribbon>
        </div>
        <div class="rulerContainer">
        </div>
        <div class="workPanel">
            <div class="panelTitle"></div>
            <div class="panelContent">
                <document></document>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    import Document from "./document.vue";
    import Ribbon from "./ribbon.vue";

    Vue.component('ribbon', Ribbon);
    Vue.component('document', Document);

    @Component
    export default class NewTemplate extends Vue {
    }
</script>
<style>
    @import url('../../wwwroot/css/newTemplate.css');
</style>