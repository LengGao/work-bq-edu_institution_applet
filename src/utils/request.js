import store from '@/store'
const toLogin = () => {
    uni.redirectTo({
        url: "/pages/login/index"
    });
}
const toQuestionBank = () => {
    uni.redirectTo({
        url: `/pages/selectQuestionBank/index`,
    });
}
const toNoPermission = () => {
    uni.redirectTo({
        url: `/pages/noPermission/index`,
    });
}
const errorHandler = {
    '-1': toLogin,
    '-2': toNoPermission,
    '-3': toQuestionBank
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
        data: Object.assign({
            question_bank_id: store.getters.question_bank_id
        }, options.data),
        header: Object.assign({
            token: store.getters.token
        }, options.header),
        url: process.env.VUE_APP_BASE_API + options.url,
        success: (response) => {
            const data = response.data
            if (data.error_code !== 0) {
                errorHandler[data.error_code] && errorHandler[data.error_code]()
                uni.showToast({
                    icon: 'none',
                    title: data.message
                })
                reject(data)
            }
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