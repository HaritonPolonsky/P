module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./public_html/dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./public_html/dev/static/styles/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch(['./public_html/dev/static/images/general/**/*.{png,jpg,gif}',
            './public_html/dev/static/images/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
        $.gulp.watch('./public_html/dev/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./public_html/dev/static/js/**/*.js', $.gulp.series('js:dev'));
    });
};