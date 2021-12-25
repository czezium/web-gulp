const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const fonter = require('gulp-fonter')
const newer = require('gulp-newer')

// Обработка Шрифтов
const fonts = () =>{
    return src(path.fonts.src)
      .pipe(plumber({
          errorHandler: notify.onError(error => ({
              title: 'Fonts',
              message: error.message
          }))
      }))
      .pipe(newer(path.fonts.dist))
      .pipe(fonter(app.fonter))
      .pipe(dest(path.fonts.dist))
}

module.exports = fonts;
