const path = require('path')


const resolve = dir => {
    return path.join(__dirname, dir)
}


module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    lintOnSave: false,
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('_a', resolve('src/assets'))
            .set('_s', resolve('src/constant'))
            .set('_l', resolve('src/libs'))
            .set('_t', resolve('src/assets/theme'));

        config.module
            .rule('lint')
            .test(/\.vue$/)
            .pre()
            .include
            .add(resolve('src'))
            .end()
            .use('iview')
            .loader('iview-loader')
            .options({
                prefix: false
            });

        // 压缩图片
        if (process.env.NODE_ENV === 'production') {
            config.module
                .rule('images')
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({
                    bypassOnDebug: true
                })
        }

    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/less/variables.less') // 变量文件位置
            ]
        }
    },


};
