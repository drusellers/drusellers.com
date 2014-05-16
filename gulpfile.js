var gulp = require('gulp');
var typescript = require('gulp-tsc');

gulp.task('default', function(){
  gulp.src(['src/**/*.ts'])
    .pipe(typescript({module:'commonjs'}))
    .pipe(gulp.dest('dest/'))
});
