const { src, dest, task, series, parallel, watch } = require('gulp')
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');

task('pug', () => {
    return src('./src/pug/views/**/*.pug')
        .pipe(
            pug({
                // Your options in here.  
            })
        )
        .pipe(dest('./build'))
        .pipe(browserSync.stream());
})

task('server', () => {
    browserSync.init({
        server: { baseDir: 'build/' },
        notify: false,
        online: true
    })
})

task('webpack', () => {
    return src('./src/js/main.js')
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(dest('./build/js'))
        .pipe(browserSync.stream());
})

task('sass', () => {
    return src('./src/style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./build/css'))
        .pipe(browserSync.stream());
})

task('watch', () => {
    watch('./src/pug/**/*.pug', series('pug'));
    watch('./src/js/**/*.js', series('webpack'));
    watch('./src/style/**/*.scss', series('sass'));
})

task('copy', () => {
    return src('./src/public/**/*')
        .pipe(copy('./build', { prefix: 1 }))
        .pipe(browserSync.stream());
})

task('clean', () => {
    return src('./build', { read: false, allowEmpty: true })
        .pipe(clean());
})

task('serve', series('clean', parallel('pug', 'webpack', 'sass', 'copy'), parallel('watch', 'server')))