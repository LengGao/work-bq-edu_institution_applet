import { getVersion } from "@/api/user";
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
                appId: "wxb8322f5e02dbbc3d",
            };
            const res = await getVersion(data);
            commit('SET_INFO', res.data)
        },
        setAppInfo({ commit }, data) {
            commit(data)
        }
    }
}
export default applet