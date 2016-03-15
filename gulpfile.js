var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['copyhtml'] ,function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('copyhtml', function() {
    gulp.src('index.html')
        // Perform minification tasks, etc here
        .pipe(gulp.dest('./dist'));
});