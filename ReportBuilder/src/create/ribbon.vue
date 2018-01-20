<template>
    <div id="ribbon">
        <div class="ribbon-window-title"></div>
        <div class="ribbon-tab" id="format-tab">
            <span class="ribbon-title">Main</span>
            <div class="ribbon-section">
                <span class="section-title">Users</span>
                <div class="ribbon-button ribbon-button-large" @click="added">
                    <i class="fa fa-pencil"></i> <span class="button-title">Add</span>
                </div>
                <div class="ribbon-button ribbon-button-large" @click="removed">
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
            <span class="ribbon-title">Work Area</span>
            <div class="ribbon-section">
                <span class="section-title">Header and Footer</span>
                <div class="ribbon-button ribbon-button-large" @click="toggleHeader">
                    <span class="button-title">Toggle<br />Header</span>
                    <span class="button-help">This button will do something else.</span>
                    <i class="fa fa-pencil"></i>
                </div>
                <div class="ribbon-button ribbon-button-large <!--disabled-->" @click="toggleFooter">
                    <span class="button-title">Toggle<br />Footer</span>
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
    import { Component, Prop } from 'vue-property-decorator';
    import Document from "./document.vue";

    @Component
    export default class Ribbon extends Vue {
        constructor() {
            super();
        }
        @Prop() added: void;
        @Prop() removed: void;
        @Prop() toggleHeader: void;
        @Prop() toggleFooter: void;

        mounted(): void {
            $("#ribbon").ribbon();
        }
    }
</script>