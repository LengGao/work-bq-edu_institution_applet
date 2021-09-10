import { getVersion } from "@/api/user";
const appId = process.env.VUE_APP_APPID
console.log(appId)
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
        async getAppInfo({ commit }) {
            const data = {
                appId,
            };
            const res = await getVersion(data);
            console.log(res)
            commit('SET_INFO', res.data)
        },
        setAppInfo({ commit }, data) {
            commit(data)
        }
    }
}
export default applet