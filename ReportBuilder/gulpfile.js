"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var del = require("del");

var path = {
    rootPath: "./",
    jsPath: "./wwwroot/dist/"
};

gulp.task("all", function () {
    var files = [
        "wwwroot/js/site.js",
        "wwwroot/js/ruler.min.js"
    ];
    return gulp.src(files)
        .pipe(concat("site.js"))
        .pipe(gulp.dest(path.jsPath))
        .pipe(gulp.dest(path.jsPath));
});

gulp.task("watch", function () {
    gulp.watch("wwwroot/js/**/*.js", ["all"]);
});

