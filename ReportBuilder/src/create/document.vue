<template>
    <div class="documentContainer">
        <h3>Document</h3>
        <span>{{number}}</span>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    @Component
    export default class Document extends Vue {
        public number: number = 0;
    }
</script>