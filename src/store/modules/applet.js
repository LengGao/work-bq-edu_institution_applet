import { getVersion } from "@/api/user";
const appId = process.env.VUE_APP_APPID
const applet = {
    state: {
        appInfo: {}
    },
    mutations: {
        SET_INFO(state, data) {
            state.appInfo = data
        }
    },
    actions: {
        async getAppInfo({ commit, dispatch }) {
            const data = {
                appId,
            };
            const res = await getVersion(data);
            commit('SET_INFO', res.data)
            // 审核模式
            if (res.data.debug) {
                dispatch('setUserInfo', res.data.user_info, { root: true })
            }
        },
        setAppInfo({ commit }, data) {
            commit(data)
        }
    }
}
export default applet