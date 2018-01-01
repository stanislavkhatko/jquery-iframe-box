var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Static Server + watching scss/js/php files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "vibox"
    });

    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.scss")
        .pipe(sass({outputStyle: 'extended'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

// minify css
gulp.task('minify-css', function () {
    gulp.src('src/css/vibox.css')
        .pipe(minify({keepBreaks: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'))
    gulp.src('src/css/vibox.css')
        .pipe(gulp.dest('dist/css'))
});

// minify js
gulp.task('minify-js', function() {
    gulp.src('src/js/vibox.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    gulp.src('src/js/vibox.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build',['minify-css', 'minify-js']);