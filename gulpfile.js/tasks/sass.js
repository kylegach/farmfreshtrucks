// [1] - Remove these requires & tasks if using the 'rev' task

var gulp         = require('gulp');
var config       = require('../config').sass;
var handleErrors = require('../lib/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css'); // [1]
var rename       = require('gulp-rename');     // [1]
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var size         = require('gulp-sizereport'); // [1]

gulp.task('sass', function () {
  return gulp.src(config.src)
		.pipe(sourcemaps.init())
		.pipe(sass(config.settings))
		.on('error', handleErrors)
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(gulp.dest(config.dest))
		.pipe(minifyCSS())             // [1]
		.pipe(rename(function (path) { // [1]
			path.basename += ".min";
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest))  // [1]
		.pipe(size())
		.pipe(browserSync.reload({stream:true}));
});
