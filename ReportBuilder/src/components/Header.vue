<template>
    <div class="cHeader">
        {{content}}
    </div>
</template>

<script lang="ts">
    import { TextBase } from "./TextControls"
    import { Enums } from "./Enums"

    export default class Header extends TextBase {
        constructor() {
            super();
            this.content = "Add Header Here";
            this.textAlign = Enums.TextAlign.Center;
        }
    }
</script>