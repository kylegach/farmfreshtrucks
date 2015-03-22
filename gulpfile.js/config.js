var buildDirectory  = './build';
var buildAssets     = buildDirectory + '/assets';
var staticDirectory  = './static';
var sourceDirectory = './src';
var sourceAssets    = sourceDirectory + '/assets';

module.exports = {
	buildDirectory: buildDirectory,
	sourceAssets: sourceAssets,
	buildAssets: buildAssets,

	browserify: {
		bundleConfigs: [{
			entries: sourceAssets + '/javascripts/site.js',
			dest: buildAssets + '/javascripts',
			outputName: 'site.js',
			// transform: ['babelify'],
			require: ['lodash']
		}/*, {
			entries: sourceAssets + '/javascripts/page.js',
			dest: buildAssets + '/javascripts',
			outputName: 'page.js',
			transform: ['babelify'],
			external: ['lodash']
		}*/]
	},

	browserSync: {
		// server: {
		// 	baseDir: buildDirectory
		// },
		proxy: "localhost:8888/farmfreshtrucks",
		// files: ['build/**/*.html'],
		browser: 'google chrome canary'
	},

	criticalCSS: {
		src: buildAssets + '/stylesheets'
	},

	// deploy: {
	//   url: 'http://greypants.github.io/gulp-starter/',
	//   src: buildDirectory + '/**/*'
	// },

	// iconFont: {
	//   name: 'Gulp Starter Icons',
	//   src: sourceAssets + '/icons/*.svg',
	//   dest: buildAssets + '/fonts',
	//   sassDest: sourceAssets + '/stylesheets/generated',
	//   template: './gulpfile.js/tasks/iconFont/template.sass',
	//   sassOutputName: '_icons.sass',
	//   fontPath: '../fonts',
	//   className: 'icon',
	//   options: {
	//     fontName: 'icons',
	//     appendCodepoints: true,
	//     normalize: false
	//   }
	// },

	html: {
		// src: [sourceDirectory + '/views/**/*.html', '!**/{layouts,shared}/**'],
		src: staticDirectory + '/**/*.html',
		dest: buildDirectory,
		// watch: sourceDirectory + '/views/**/*.html',
		watch: staticDirectory + '/**/*.html'
		// swig: {
		//   defaults: { cache: false }
		// }
	},

	images: {
		src: sourceAssets + '/images/**',
		dest: buildAssets + '/images'
	},

	// karma: {
	//   frameworks: ['mocha', 'sinon-chai', 'browserify'],
	//   files: [
	//     'src/assets/javascripts/**/__tests__/*'
	//   ],
	//   preprocessors: {
	//     'src/assets/javascripts/**/__tests__/*': ['browserify']
	//   },
	//   browserify: {
	//     debug: true,
	//     transform: ['babelify']
	//   },
	//   singleRun: process.env.TRAVIS_CI === 'true',
	//   reporters: ['nyan'],
	//   browsers: [(process.env.TRAVIS_CI === 'true'? 'Firefox' : 'Chrome')]
	// },

	php: {
		src: './',
		dest: './',
		watch: './**/*.php'
	},

	server: {
		root: process.cwd() + buildDirectory.substr(1),
		port: process.env.PORT || 5000,
		logLevel: process.env.NODE_ENV ? 'combined' : 'dev',
		staticOptions: {
			extensions: ['html'],
			maxAge: '31556926'
		}
	},

	sass: {
		src: sourceAssets + '/stylesheets/**/*.{sass,scss}',
		dest: buildAssets + '/stylesheets',
		autoprefixer: {
			browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
			cascade: true
		},
		settings: {
			imagePath: 'images', // Used by the image-url helper
			outputStyle: 'nested',
			precision: 9
		}
	},

	uglifyJS: {
		src: buildAssets + '/javascripts',
		dest: buildAssets + '/javascripts'
	},

	uncss: {
		src: buildAssets + '/stylesheets/site.min.css',
		dest: buildAssets + '/stylesheets',
		options: {
			html: [buildDirectory + '/**/*.html'],
			ignore: [/expanded/,/js/,/wp-/,/align/,/admin-bar/]
		}
	}
};
