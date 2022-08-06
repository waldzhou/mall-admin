const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                    // 兼容 less-loader 3.x
                    math: 'always',
                },
            },
        },
    },
    lintOnSave: false //关闭eslint检查
});