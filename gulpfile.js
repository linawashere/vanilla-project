const { src, dest, task, series, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const eslint = require('gulp-eslint');
// const prettier = require('gulp-prettier');
const copy = require('gulp-copy');

task('pug', () => {
    return src('./src/pug/views/**/*.pug')
        .pipe(pug({}))
        .pipe(dest('./build'))
        .pipe(browserSync.stream());
})

task('server', () => {
    browserSync.init({
        server: { baseDir: 'build/' },
        notify: false,
        online: true
    });
});

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
    watch('./src/js/**/*.js', series('js'));
    watch('./src/style/**/*.scss', series('sass'));
    watch('./src/public/**/*', series('copy'));
})

task('copy', () => {
    return src('./src/public/**/*')
        .pipe(dest('./build'))
        .pipe(browserSync.stream());
});

task('clean', () => {
    return src('./build', { read: false, allowEmpty: true })
        .pipe(clean());
});

task('lint', () => {
    return src('./src/js/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})

task('format', () => {
    return src('./src/**/*.{js,scss,pug}')
        .pipe(prettier())
        .pipe(dest('./src'));
})

task('js', () => {
    return src('./src/js/main.js')
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(dest('./build/js'))
        .pipe(browserSync.stream());
});

task('serve', series('clean', parallel('pug','webpack', 'sass', 'js', 'copy'), parallel('watch', 'server')));
