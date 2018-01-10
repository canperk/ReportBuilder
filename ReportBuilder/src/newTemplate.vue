<template>
    <div class="pageContainer">
        <div class="mainProperties">

        </div>
        <div class="rulerContainer">
            {{title}}
        </div>
        <div class="workPanel">

        </div>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: ["title"]
    });
</script>
