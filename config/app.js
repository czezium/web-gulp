const isProd = process.argv.includes('--production')
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: true
    },

    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg']
    }
}
