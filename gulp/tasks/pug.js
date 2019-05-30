const plumber = require('gulp-plumber'),
      pug = require('gulp-pug');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./public_html/dev/pug/*.pug')
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./public_html/build/'))
            .on('end', $.browserSync.reload);
    });
};
