const gulp = require('gulp')
const browsersync = require('browser-sync').create()

gulp.task('browsersync', (cb) => {
  browsersync.init({
    server: './dist/',
    files: [
      './dist/assets/app.min.css',
      './dist/assets/all.js',
      './dist/*.{html, xml}',
      './dist/**/*.{html, xml}'
    ],
    port: 3000,
    open: false
  })
  cb()
})
