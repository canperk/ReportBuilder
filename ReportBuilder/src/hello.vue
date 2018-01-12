<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks()}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Hello extends Vue {
        constructor() {
            super();
            this.enthusiasm = this.initialEnthusiasm;
        }
        @Prop() name: string;
        @Prop() initialEnthusiasm: number;

        increment() : void { this.enthusiasm++; }
        decrement() : void {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        }
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }
        enthusiasm: number;
    }
</script>
