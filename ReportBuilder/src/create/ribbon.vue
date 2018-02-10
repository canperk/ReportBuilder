<template>
    <div id="ribbon">
        <div class="ribbon-window-title"></div>
        <div class="ribbon-tab" id="format-tab">
            <span class="ribbon-title">Components</span>
            <div class="ribbon-section">
                <span class="section-title">Text</span>
                <button class="ribbon-button ribbon-button-large" @click="addHeader">
                    <i class="fa fa-header"></i> <span class="button-title">Header</span>
                </button>
                <button class="ribbon-button ribbon-button-large" @click="addText">
                    <i class="fa fa-paragraph"></i> <span class="button-title">Text</span>
                </button>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Image</span>
                <button class="ribbon-button ribbon-button-large" id="add-page-btn">
                    <i class="fa fa-picture-o"></i> <span class="button-title">Image</span>
                </button>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Multidata</span>
                <button class="ribbon-button ribbon-button-large" @click="addTable">
                    <i class="fa fa-table"></i> <span class="button-title">Table</span>
                </button>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Simple Components</span>
                <button class="ribbon-button ribbon-button-large" id="run-btn">
                    <i class="fa fa-asterisk"></i> <span class="button-title">Bound Object</span>
                </button>
                <button class="ribbon-button ribbon-button-large" @click="addLink">
                    <i class="fa fa-anchor"></i> <span class="button-title">Link</span>
                </button>
                <button class="ribbon-button ribbon-button-large" id="repeat-btn">
                    <i class="fa fa-sum"></i> <span class="button-title">Aggreagate</span>
                </button>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Tasks</span>
                <button class="ribbon-button ribbon-button-small" id="run-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">New</span>
                </button>
                <button class="ribbon-button ribbon-button-small" id="repeat-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">Assignment</span>
                </button>
                <button class="ribbon-button ribbon-button-small disabled" id="save-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">Queries</span>
                </button>
            </div>
        </div>
        <div class="ribbon-tab" id="reports-tab">
            <span class="ribbon-title">Work Area</span>
            <div class="ribbon-section">
                <span class="section-title">Header and Footer</span>
                <button class="ribbon-button ribbon-button-large" @click="toggleHeader">
                    <span class="button-title">Toggle<br />Header</span>
                    <span class="button-help">This button will do something else.</span>
                    <i class="fa fa-chevron-up"></i>
                </button>
                <button class="ribbon-button ribbon-button-large <!--disabled-->" @click="toggleFooter">
                    <span class="button-title">Toggle<br />Footer</span>
                    <span class="button-help">This button will remove the selected table from your document.</span>
                    <i class="fa fa-chevron-down"></i>
                </button>
            </div>
        </div>
        <div class="ribbon-tab" id="client-tab">
            <span class="ribbon-title">Connection</span>
            <div class="ribbon-section">
                <span class="section-title">New</span>
                <span class="section-title"></span>
                <button class="ribbon-button ribbon-button-large">
                    <span class="button-title">Add<br />Connection</span>
                    <span class="button-help">This button will do something else.</span>
                    <i class="fa fa-plug"></i>
                </button>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Data</span>
                <button class="ribbon-button ribbon-button-small" id="run-btn">
                    <span class="button-title">View Data</span>
                    <span class="button-help">This button will run the program.</span>
                    <i class="fa fa-list"></i>
                </button>
                <button class="ribbon-button ribbon-button-small" id="repeat-btn">
                    <span class="button-title">Show Data Source</span>
                    <span class="button-help">This button will repeat something.</span>
                    <i class="fa fa-link"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';
    import Document from "./document.vue";

    @Component
    export default class Ribbon extends Vue {
        constructor() {
            super();
        }
        @Prop() addHeader: void;
        @Prop() addLink: void;
        @Prop() addTable: void;
        @Prop() toggleHeader: void;
        @Prop() toggleFooter: void;

        mounted(): void {
            $("#ribbon").ribbon();
        }
    }
</script>