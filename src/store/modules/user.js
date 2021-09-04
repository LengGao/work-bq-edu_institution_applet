const userInfo = uni.getStorageSync('userInfo') || {}
console.log(111, userInfo)
const user = {
    state: {
        userInfo: userInfo,
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.userInfo = data
        }
    },
    actions: {
        setUserInfo({ commit }, data) {
            commit('SET_USER_INFO', data)
            uni.setStorage({
                key: 'userInfo',
                data,
                success: function () {
                    console.log('success');
                }
            });
        }
    }
}
export default user