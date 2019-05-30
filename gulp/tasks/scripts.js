const uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');
scriptsPATH = {
    "input": "./public_html/dev/static/js/",
    "ouput": "./public_html/build/static/js/"
};

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js',
                            'node_modules/slick-carousel/slick/slick.min.js',
                            'node_modules/simplebar/dist/simplebar.min.js',
                            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                            'node_modules/jquery-validation/dist/jquery.validate.min.js',
                            'node_modules/wnumb/wNumb.js',
                            'node_modules/nouislider/distribute/nouislider.min.js'
                            
                        ])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js',
                            'node_modules/slick-carousel/slick/slick.min.js',
                            'node_modules/simplebar/dist/simplebar.min.js',
                            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                            'node_modules/jquery-validation/dist/jquery.validate.min.js',
                            'node_modules/wnumb/wNumb.js',
                            'node_modules/nouislider/distribute/nouislider.min.js'
                        ])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });
};
