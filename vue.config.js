module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://edu.com',
                changeOrigin: true,
                pathRewrite: {
                    // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                    '^/api': '/',
                },
            },
        },
    },
}