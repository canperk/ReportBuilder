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
    var newTemplate = Vue.extend({
        props: ["title"]
    });
    newTemplate.mounted = function () {
        console.log("mounted");
        $('#ribbon').ribbon();
        $('.ribbon-button').click(function () {

        });
    }
    export default newTemplate;
</script>
<style>
    @import url('../wwwroot/css/newtemplate.css');
</style>
<script>
    ;(function ($) {
        $.fn.ribbon = function (id) {
            if (!id) {
                if (this.attr('id')) {
                    id = this.attr('id');
                }
            }
            var that = function () {
                return thatRet;
            };
            var thatRet = that;
            that.selectedTabIndex = -1;
            var tabNames = [];
            that.goToBackstage = function () {
                ribObj.addClass('backstage');
            }
            that.returnFromBackstage = function () {
                ribObj.removeClass('backstage');
            }
            var ribObj = null;

            that.init = function (id) {
                if (!id) {
                    id = 'ribbon';
                }

                ribObj = $('#' + id);
                ribObj.find('.ribbon-window-title').after('<div id="ribbon-tab-header-strip"></div>');
                var header = ribObj.find('#ribbon-tab-header-strip');

                ribObj.find('.ribbon-tab').each(function (index) {
                    var id = $(this).attr('id');
                    if (id == undefined || id == null) {
                        $(this).attr('id', 'tab-' + index);
                        id = 'tab-' + index;
                    }
                    tabNames[index] = id;

                    var title = $(this).find('.ribbon-title');
                    var isBackstage = $(this).hasClass('file');
                    header.append('<div id="ribbon-tab-header-' + index + '" class="ribbon-tab-header"></div>');
                    var thisTabHeader = header.find('#ribbon-tab-header-' + index);
                    thisTabHeader.append(title);
                    if (isBackstage) {
                        thisTabHeader.addClass('file');

                        thisTabHeader.click(function () {
                            that.switchToTabByIndex(index);
                            that.goToBackstage();
                        });
                    } else {
                        if (that.selectedTabIndex == -1) {
                            that.selectedTabIndex = index;
                            thisTabHeader.addClass('sel');
                        }

                        thisTabHeader.click(function () {
                            that.returnFromBackstage();
                            that.switchToTabByIndex(index);
                        });
                    }
                    $(this).hide();
                });

                ribObj.find('.ribbon-button').each(function (index) {
                    var title = $(this).find('.button-title');
                    title.detach();
                    $(this).append(title);
                    var el = $(this);
                    this.enable = function () {
                        el.removeClass('disabled');
                    };
                    this.disable = function () {
                        el.addClass('disabled');
                    };
                    this.isEnabled = function () {
                        return !el.hasClass('disabled');
                    };
                    if ($(this).find('.ribbon-hot').length == 0) {
                        $(this).find('.ribbon-normal').addClass('ribbon-hot');
                    };
                    if ($(this).find('.ribbon-disabled').length == 0) {
                        $(this).find('.ribbon-normal').addClass('ribbon-disabled');
                        $(this).find('.ribbon-normal').addClass('ribbon-implicit-disabled');
                    };
                });

                ribObj.find('.ribbon-section').each(function (index) {
                    $(this).after('<div class="ribbon-section-sep"></div>');
                });
                ribObj.find('div').attr('unselectable', 'on');
                ribObj.find('span').attr('unselectable', 'on');
                ribObj.attr('unselectable', 'on');
                that.switchToTabByIndex(that.selectedTabIndex);
            }

            that.switchToTabByIndex = function (index) {
                var headerStrip = $('#ribbon #ribbon-tab-header-strip');
                headerStrip.find('.ribbon-tab-header').removeClass('sel');
                headerStrip.find('#ribbon-tab-header-' + index).addClass('sel');
                $('#ribbon .ribbon-tab').hide();
                $('#ribbon #' + tabNames[index]).show();
            }

            $.fn.enable = function () {
                if (this.hasClass('ribbon-button')) {
                    if (this[0] && this[0].enable) {
                        this[0].enable();
                    }
                }
                else {
                    this.find('.ribbon-button').each(function () {
                        $(this).enable();
                    });
                }
            }
            $.fn.disable = function () {
                if (this.hasClass('ribbon-button')) {
                    if (this[0] && this[0].disable) {
                        this[0].disable();
                    }
                }
                else {
                    this.find('.ribbon-button').each(function () {
                        $(this).disable();
                    });
                }
            }

            $.fn.isEnabled = function () {
                if (this[0] && this[0].isEnabled) {
                    return this[0].isEnabled();
                } else {
                    return true;
                }
            }


            that.init(id);
            $.fn.ribbon = that;
        };

    })(jQuery);
    $(document).ready(function () {
        $('#ribbon').ribbon();
        $('.ribbon-button').click(function () {

        });
    });
</script>
