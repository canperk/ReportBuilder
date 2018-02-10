<template>
    <div class="rTable">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Key</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Can</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>PERK</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { TextBase } from "./TextControls"
    import { Enums } from "./Enums"
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class ReportTable extends TextBase {
        constructor() {
            super();
            this.type = "reportTable";
        }
    }
</script>