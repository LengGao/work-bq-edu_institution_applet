import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import user from './modules/user'
import applet from './modules/applet'
import questionList from './modules/questionList'
import getters from './getters'
const store = new Vuex.Store({
    modules: {
        user,
        applet,
        questionList
    },
    getters
})
export default store