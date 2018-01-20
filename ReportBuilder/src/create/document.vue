<template>
    <div class="documentContainer">
        <div class="docHeader" v-if="showHeader"></div>
        <div class="docContent">
            <h3>Document</h3>
            <span>{{count}}</span>
        </div>
        <div class="docFooter" v-if="showFooter"></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    @Component
    export default class Document extends Vue {
        public count: number = 0;
        public showHeader: Boolean = true;
        public showFooter: Boolean = true;
    }
</script>