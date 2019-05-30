module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./public_html/dev/static/fonts/**/*.*')
            .pipe($.gulp.dest('./public_html/build/static/fonts/'));
    });
};