<template>
    <div class="rTable selectable" @click="select" v-bind:class="{ selected : isSelected }" v-bind:style="{ left: left + 'mm', top: top + 'mm' }">
        <div class="componentBody">
            <table v-bind:style="{ width: width + 'mm' }">
                <thead>
                    <tr>
                        <th>Colum1</th>
                        <th>Column2</th>
                        <th>Column3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>16483</td>
                        <td>Water</td>
                        <td>0.87</td>
                    </tr>
                    <tr>
                        <td>53373</td>
                        <td>Milk</td>
                        <td>4.05</td>
                    </tr>
                    <tr>
                        <td>008132</td>
                        <td>Chocolate</td>
                        <td>21.89</td>
                    </tr>
                </tbody>
            </table>
            <div class="componentCover">

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ComponentBase } from "./TextControls"
    import { Enums } from "./Enums"
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class ReportTable extends ComponentBase {
        constructor() {
            super();
            this.type = "reportTable";
            this.left = 0;
            this.top = 0;
            this.width = 150;
        }
    }
</script>