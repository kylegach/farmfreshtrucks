var gulp   = require('gulp');
var config = require('../config');
var del    = require('del');

gulp.task('clean', function (cb) {
  del([config.buildAssets, config.html.dest, config.iconFont.sassDest], cb);
});
