var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-uglify');

var jsSrc = 'components/d1restangular/**/*.js';
var jsDest = 'dist';

gulp.task('concat', function () {
   gulp.src(jsSrc)
       .pipe(concat('d1restangular.js'))
       .pipe(gulp.dest(jsDest));
});

gulp.task('minify', function () {
    gulp.src(jsSrc)
        .pipe(concat('d1restangular.min.js'))
        .pipe(minify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('watchJs', function () {
   gulp.watch(jsSrc, function () {
       gulp.run('concat');
       gulp.run('minify');
   })
});
