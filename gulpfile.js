var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
    gulp.src('test/**/*.ts', { read: false })
        .pipe(mocha());
});

gulp.task('default', ['test']);