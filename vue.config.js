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
    lintOnSave: false, //关闭eslint检查
    devServer: {
        proxy: {
            "/api": {
                target: "https://mallapi.duyiedu.com/passport/login",
                changeOrigin: true, // 允许跨域请求
            },
        },
    },
});