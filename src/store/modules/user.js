const userInfo = uni.getStorageSync('userInfo') || {}
const questionBankInfo = uni.getStorageSync('questionBankInfo') || {}
console.log(111, userInfo)
const user = {
    state: {
        userInfo: userInfo,
        questionBankInfo: questionBankInfo
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.userInfo = data
        },
        SET_QUESTION_BANK_INFO(state, data) {
            state.questionBankInfo = data
        }
    },
    actions: {
        setQuestionBankInfo({ commit }, data) {
            commit('SET_QUESTION_BANK_INFO', data)
            uni.setStorage({
                key: 'questionBankInfo',
                data
            });
        },
        setUserInfo({ commit }, data) {
            commit('SET_USER_INFO', data)
            uni.setStorage({
                key: 'userInfo',
                data
            });
        }
    }
}
export default user