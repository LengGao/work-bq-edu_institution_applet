import requset from '@/utils/request'
// 获取小程序信息
export const getVersion = (data) => {
    return requset({
        url: 'sign/getVersion',
        method: 'post',
        data,
        auth: false,
        loading: true
    })
}
// 授权登录
export const getSign = (data) => {
    return requset({
        url: 'sign/getSign',
        method: 'post',
        data,
        auth: false
    })
}