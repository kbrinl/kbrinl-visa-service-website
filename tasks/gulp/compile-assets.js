const gulp = require('gulp')
const sass = require('gulp-sass')
const packageImporter = require('node-sass-package-importer')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const postcssNormalize = require('postcss-normalize')
const cssnano = require('cssnano')
const stylelint = require('gulp-stylelint')
sass.compiler = require('node-sass')
const logger = require('gulp-logger')

gulp.task('compile:scss', () => {
  const src = 'src/scss/index.scss'
  return gulp.src(src)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))
    .pipe(logger({
      before: 'Compiling SCSS ' + src,
      after: 'Compiling complete'
    }))
    .pipe(sass({
      importer: packageImporter()
    }).on('error', sass.logError))
    .pipe(postcss([
      postcssNormalize({ forceImport: true }),
      cssnano
    ]))
    .pipe(rename({
      basename: 'app',
      extname: '.min.css'
    }))
    .pipe(gulp.dest('dist/assets'))
})
