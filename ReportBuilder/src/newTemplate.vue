<template>
    <div class="pageContainer">
        <div class="mainProperties">
            <div id="ribbon">
                <div class="ribbon-window-title"></div>
                <div class="ribbon-tab" id="format-tab">
                    <span class="ribbon-title">Main</span>
                    <div class="ribbon-section">
                        <span class="section-title">Users</span>
                        <div class="ribbon-button ribbon-button-large">
                            <i class="fa fa-pencil"></i> Add
                        </div>
                        <div class="ribbon-button ribbon-button-large">
                            <i class="fa fa-pencil"></i> Search
                        </div>
                    </div>
                    <div class="ribbon-section">
                        <span class="section-title">Clients</span>
                        <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                            <i class="fa fa-pencil"></i> Check Services
                        </div>
                    </div>
                    <div class="ribbon-section">
                        <span class="section-title">Evidence</span>
                        <div class="ribbon-button ribbon-button-large" id="add-page-btn">
                            <i class="fa fa-pencil"></i> Usage Data
                        </div>
                    </div>
                    <div class="ribbon-section">
                        <span class="section-title">Services & Fees</span>
                        <div class="ribbon-button ribbon-button-small" id="run-btn">
                            <i class="fa fa-pencil"></i> Price
                        </div>
                        <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                            <i class="fa fa-pencil"></i> Promotions
                        </div>
                    </div>
                    <div class="ribbon-section">
                        <span class="section-title">Tasks</span>
                        <div class="ribbon-button ribbon-button-small" id="run-btn">
                            <i class="fa fa-pencil"></i> New
                        </div>
                        <div class="ribbon-button ribbon-button-small" id="repeat-btn">
                            <i class="fa fa-pencil"></i> Assignment
                        </div>
                        <div class="ribbon-button ribbon-button-small disabled" id="save-btn">
                            <i class="fa fa-pencil"></i> Queries
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
        </div>
        <div class="rulerContainer">
        </div>
        <div class="workPanel">
            <div class="panelTitle"></div>
            <div class="panelContent">

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class NewTemplate extends Vue {
        @Prop() title: string;

        created(): void {
            setTimeout(function () {
                $('#ribbon').ribbon();
                $('.ribbon-button').click(function () {

                });
            }, 500);
            
        }
    }
</script>
<style>
    @import url('../wwwroot/css/newtemplate.css');
</style>