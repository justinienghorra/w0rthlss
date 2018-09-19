var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if');

var paths = {
    htmlSource: 'index.html',
    htmlDist: 'dist/'
}

gulp.task('all', function () {
    return gulp.src(paths.htmlSource)
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS({ compatibility: 'ie8'})))
        .pipe(gulp.dest(paths.htmlDist));
});