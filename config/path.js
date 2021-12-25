const srcPath = './src';
const distPath = './dist';

module.exports = {
    root: distPath,

    html: {
        src: srcPath +  '/html/*.html',
        watch: srcPath + '/html/**/*.html',
        dist: distPath
    },

    css: {
        src: srcPath +  '/css/*.css',
        watch: srcPath + '/css/**/*.css',
        dist: distPath + '/css'
    },

    js: {
        src: srcPath +  '/js/*.js',
        watch: srcPath + '/js/**/*.js',
        dist: distPath + '/js'
    },

    img: {
        src: srcPath +  '/img/*.{png,jpg,jpeg,gif,svg}',
        watch: srcPath + '/img/**/*.{png,jpg,jpeg,gif,svg}',
        dist: distPath + '/img'
    },

    fonts: {
        src: srcPath +  '/fonts/*.{ttf,otf}',
        watch: srcPath + '/fonts/**/*.{ttf,otf}',
        dist: distPath + '/fonts'
    },
}
