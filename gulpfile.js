const gulp = require('gulp');

gulp.task('default', function(){
    gulp.src(['src/**', "!**/*.ts"])
    .pipe(gulp.dest('compiled'))
})