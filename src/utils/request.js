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
const sleep = (time) => new Promise(resolve => {
    setTimeout(resolve, time);
})
const requset = (options) => new Promise(async (resolve, reject) => {
    const { auth = true, loading, data, header = {}, url } = options
    // 等一下sign/getVersion 接口请求结果
    if (!store.getters.organization_id && url !== 'sign/getVersion') {
        await sleep(1000)
    }
    // 需要鉴权的接口必须有token
    if (auth !== false && !store.getters.token) {
        toLogin()
        return
    }
    loading && uni.showLoading({
        title: "加载中",
    });
    console.log(`${url} >>参数：`, data)
    uni.request({
        ...options,
        data: {
            ...data,
            question_bank_id: store.getters.question_bank_id
        },
        header: {
            ...header,
            token: store.getters.token
        },
        url: process.env.VUE_APP_BASE_API + url,
        success: (response) => {
            const { data } = response
            console.log(`${url} >>success：`, data)
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
            console.log(`${url} >>error：`, error)
            uni.showToast({
                icon: 'error',
                title: error.errMsg || '稍后再试'
            })
            reject(error)
        },
        complete: () => {
            loading && uni.hideLoading()
        }
    })
})
export default requset