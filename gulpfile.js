var gulp = require('gulp'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if');

var paths = {
    htmlSource: 'index.html',
    htmlDist: 'dist/'
}
/*
gulp.task('script', function () {
	return gulp.src(paths.scriptSource)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename('app.min.js'))
		.pipe(gulp.dest(paths.scriptDest));
});

gulp.task('css', () => {
    return gulp.src(paths.cssSources)
        .pipe(concatCss('style.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(paths.cssDest));
});
*/
gulp.task('all', function () {
    return gulp.src(paths.htmlSource)
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCSS({ compatibility: 'ie8'})))
        .pipe(gulp.dest(paths.htmlDist));
});