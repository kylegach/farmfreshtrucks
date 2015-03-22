var config       = require('../../config');
var gulp         = require('gulp');
var revCollector = require('gulp-rev-collector');

// 3) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', ['rev-font-workaround'], function(){
  return gulp.src([config.buildDirectory + '/assets/rev-manifest.json', config.buildDirectory + '/**/*.{css,js}'])
    .pipe(revCollector())
    .pipe(gulp.dest(config.buildDirectory));
});
