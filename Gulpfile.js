const path          = require('path');
const gulp          = require('gulp');
const gzip          = require('gulp-gzip');
const uglify        = require('gulp-uglify');
const rename        = require('gulp-rename');
const gutil         = require('gulp-util');
const sourcemaps    = require('gulp-sourcemaps');
const browserify    = require('browserify');
const watchify      = require('watchify');
const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');

const paths = {
    JS_ENTRY: path.resolve('./src/js/app.js'),
    JS_SRC: path.resolve('./src/js'),
    JS_DEST: path.resolve('./public/js')
}

const browserifyConfig = {
    entries: [paths.JS_ENTRY],
    transform: [ 'babelify' ]
}

const opts = Object.assign({}, watchify.args, browserifyConfig);
const bundler = watchify(browserify(opts));
gulp.task('scripts', bundle);
bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {
    return bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        // .pipe(sourcemaps.init({ loadMaps: true }))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.JS_DEST))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.JS_DEST))
        .pipe(gzip())
        .pipe(gulp.dest(paths.JS_DEST))
}

gulp.task('default', ['scripts']);
