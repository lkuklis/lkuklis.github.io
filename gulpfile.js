var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var inject = require('gulp-inject');

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('copyhtml', function() {
    gulp.src('index.html')
        // Perform minification tasks, etc here
        .pipe(gulp.dest('./dist'));
});

gulp.task('index', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./scripts/**/*.js', './stylesheets/**/*.css'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});

