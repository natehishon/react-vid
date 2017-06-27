'use strict';

var gulp = require('gulp'),

    imagemin = require('gulp-imagemin'),

    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    min = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    autoprefixer = require('autoprefixer'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss');



gulp.task('css', ['cssmin']);

gulp.task('sass', function () {

    return gulp.src([
        'style/style.scss'

    ])
        .pipe(sass())
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(gulp.dest('style/css'));
});

gulp.task('concatcss', ['sass'], function () {

    return gulp.src([
        // 'node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css',
        // 'node_modules/bootstrap-material-design/dist/css/ripples.css',
        'node_modules/bulma/css/bulma.css',
        'style/css/style.css'

    ])
        .pipe(concat('all.css'))
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(gulp.dest('style/css/'));
});

gulp.task('cssmin', ['concatcss'], function () {

    return gulp.src([
        'style/css/all.css'
    ])
        .pipe(min())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('style/css'));
});

gulp.task('concatjs', function () {

    return gulp.src([
        'node_modules/bootstrap-material-design/dist/js/material.js',
        'node_modules/bootstrap-material-design/dist/js/ripples.js'
    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('style/js'));
});

