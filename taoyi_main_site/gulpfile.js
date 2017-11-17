var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');	//前缀的后处理程序

var paths = {
    less: ['./static/assets/less/*.less','./static/assets/less/**/*.less']
}
// 压缩 less
gulp.task('less', function () {
    return gulp.src(paths.less)
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Android >= 4.0'],
        cascade: true, 
        //是否美化属性值 默认：true 像这样：
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        //是否去掉不必要的前缀 默认：true 
        remove:true
    }))
    //.pipe(minifycss())
    .pipe(gulp.dest('./static/assets/css'));
});

gulp.task('watch', function(){
	gulp.watch(paths.less,['less']);
})

//定义默认任务
gulp.task('default',['less', 'watch'],function(){
    console.log('ok');
});