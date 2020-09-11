const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task("default", function() {
  // ★ style.scssファイルを監視
  return gulp.watch("src/style.scss", function() {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return (
      gulp
        .src("src/style.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "compressed"
          })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        .pipe(autoprefixer(['last 3 versions', 'ie >= 11', 'Android >= 5', 'iOS >= 8']))
        // cssフォルダー以下に保存
        .pipe(gulp.dest("dist"))
    );
  });
});