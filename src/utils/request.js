import store from '@/store'
const toLogin = () => {
    uni.redirectTo({
        url: "/pages/login/index"
    });
}
const requset = (options) => new Promise((resolve, reject) => {
    if (options.auth !== false && !store.getters.token) {
        toLogin()
        return
    }
    options.loading && uni.showLoading({
        title: "加载中",
    });
    uni.request({
        ...options,
        header: Object.assign({
            token: store.getters.token
        }, options.header),
        url: process.env.VUE_APP_BASE_API + options.url,
        success: (response) => {
            const data = response.data
            if (data.error_code === -1) {
                toLogin()
            }
            if (data.error_code !== 0) {
                uni.showToast({
                    icon: 'none',
                    title: data.message
                })
                console.log(111, data)
                reject(data)
            }
            console.log(222, data)
            resolve(data)
        },
        fail: (error) => {
            uni.showToast({
                icon: 'error',
                title: error.errMsg || '稍后再试'
            })
            reject(error)
        },
        complete: () => {
            options.loading && uni.hideLoading()
        }
    })
})
export default requset