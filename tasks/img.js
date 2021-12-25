const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const app = require('../config/app.js')

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const newer = require('gulp-newer')

// Обработка Изображений
const img = () =>{
    return src(path.img.src)
      .pipe(plumber({
          errorHandler: notify.onError(error => ({
              title: 'Image',
              message: error.message
          }))
      }))
      .pipe(newer(path.img.dist))
      .pipe(dest(path.img.dist))
}

module.exports = img;
