<template>
    <a v-bind:href="href" v-bind:target="target">Click Me!</a>
</template>
<script lang="ts">
    import { TextBase } from "./TextControls"
    import { Enums } from "./Enums"
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class ReportLink extends TextBase {
        constructor() {
            super();
            this.href = "#";
            this.target = Enums.HrefTarget.None;
            this.type = "reportLink";
        }

        public href: string;
        public target: string;
    }
</script>
