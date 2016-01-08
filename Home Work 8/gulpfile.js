/**
 * Created by mainadmin on 06.12.15.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
    return gulp.src("functions.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});