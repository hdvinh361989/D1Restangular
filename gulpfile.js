var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-uglify'),
    rename = require('gulp-rename');

var jsSrc = 'components/d1restangular/**/*.js';
var jsDest = 'dist';

gulp.task('concat', function () {
    gulp.src(jsSrc)
        .pipe(concat('d1restangular.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(minify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest(jsDest));
});

gulp.task('watchJs', function () {
    gulp.watch(jsSrc, function () {
        gulp.run('concat');
    })
});
