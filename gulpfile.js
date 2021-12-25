const { watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create();

// Конфигурация
const path = require('./config/path')
const app = require('./config/app')

// Задачи
const html = require('./tasks/html.js')
const clear = require('./tasks/clear.js')
const css = require('./tasks/css.js')
const js = require('./tasks/js.js')
const img = require('./tasks/img.js')
const fonts = require('./tasks/fonts.js')

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
}

// Наблюдатель
const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload)
    watch(path.css.watch, css).on('all', browserSync.reload)
    watch(path.js.watch, js).on('all', browserSync.reload)
    watch(path.img.watch, img).on('all', browserSync.reload)
    watch(path.fonts.watch, fonts).on('all', browserSync.reload)
}

const build = series(
    clear,
    parallel(html, css, js, img, fonts)
)

const dev = series(
    build,
    parallel(watcher, server)
);

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;

// Сборка
exports.default = app.isProd ? build : dev;
