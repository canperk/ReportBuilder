<template>
    <div class="rHeader selectable" v-bind:class="selectedClassName" @click="select" v-bind:style="{ left: left + 'mm', top: top + 'mm' }">
        <div class="componentBody">
            {{content}}
            <div class="componentCover">

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { TextBase } from "./TextControls"
    import { Enums } from "./Enums"
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class ReportHeader extends TextBase {
        constructor() {
            super();
            this.type = "reportHeader";
            this.content = "Add Header Here";
            this.textAlign = Enums.TextAlign.Center;
            this.left = 30;
            this.top = 70;
        }
    }
</script>