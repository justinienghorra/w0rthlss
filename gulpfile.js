let gulp = require('gulp');
let rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');
let concatCss = require('gulp-concat-css');

let cssFiles = 'static/css/*.css',
    cssDest = 'dist/static/css';

gulp.task('css', () => {
    return gulp.src(cssFiles)
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('style.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(cssDest));
});