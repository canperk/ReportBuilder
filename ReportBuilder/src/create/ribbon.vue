<template>
    <div id="ribbon">
        <div class="ribbon-window-title"></div>
        <div class="ribbon-tab" id="format-tab">
            <span class="ribbon-title">Main</span>
            <div class="ribbon-section">
                <span class="section-title">Users</span>
                <div class="ribbon-button ribbon-button-large" @click="add">
                    <i class="fa fa-pencil"></i> <span class="button-title">Add</span>
                </div>
                <div class="ribbon-button ribbon-button-large">
                    <i class="fa fa-pencil"></i> <span class="button-title">Search</span>
                </div>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Clients</span>
                <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">Check Services</span>
                </div>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Evidence</span>
                <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">Usage Data</span>
                </div>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Services & Fees</span>
                <div class="ribbon-button ribbon-button-small" id="run-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title"> Price</span>
                </div>
                <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">Promotions</span>
                </div>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Tasks</span>
                <div class="ribbon-button ribbon-button-small" id="run-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">New</span>
                </div>
                <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">Assignment</span>
                </div>
                <div class="ribbon-button ribbon-button-small disabled" id="save-btn">
                    <i class="fa fa-pencil"></i> <span class="button-title">Queries</span>
                </div>
            </div>
        </div>
        <div class="ribbon-tab" id="reports-tab">
            <span class="ribbon-title">Reports</span>
            <div class="ribbon-section">
                <span class="section-title">More Stuff</span>
                <div class="ribbon-button ribbon-button-large">
                    <span class="button-title">Other<br />Feature</span>
                    <span class="button-help">This button will do something else.</span>
                    <i class="fa fa-pencil"></i>
                </div>
                <div class="ribbon-button ribbon-button-large disabled" id="other-btn-2">
                    <span class="button-title">Remove<br />Table</span>
                    <span class="button-help">This button will remove the selected table from your document.</span>
                    <i class="fa fa-pencil"></i>
                </div>
            </div>
        </div>
        <div class="ribbon-tab" id="client-tab">
            <span class="ribbon-title">Client</span>
            <div class="ribbon-section">
                <span class="section-title">New</span>
                <span class="section-title"></span>
                <div class="ribbon-button ribbon-button-large">
                    <span class="button-title">Add<br />Client</span>
                    <span class="button-help">This button will do something else.</span>
                    <i class="fa fa-pencil"></i>
                </div>
            </div>
            <div class="ribbon-section">
                <span class="section-title">Clients</span>
                <div class="ribbon-button ribbon-button-small" id="run-btn">
                    <span class="button-title">Import Clients</span>
                    <span class="button-help">This button will run the program.</span>
                    <i class="fa fa-pencil"></i>
                </div>
                <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                    <span class="button-title">Export Clients</span>
                    <span class="button-help">This button will repeat something.</span>
                    <i class="fa fa-pencil"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Document from "./document.vue";
    import { Component, Prop } from 'vue-property-decorator';
    require("../../wwwroot/js/site.js");
    @Component
    export default class Ribbon extends Vue {
        @Prop() documentContainer: Document;

        document: Document = this.documentContainer;
        mounted(): void {
            $("#ribbon").ribbon();
        }

        add(): void {
            console.log(this.document);
        }
    }
</script>