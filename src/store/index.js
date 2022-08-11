import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookie, getUserCookie, removeUserCookie } from "@/utils/userCookie";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 用于切换菜单的闭合状态  false 代表不闭合  true代表闭合
        collapsed: false,
        // 用户信息
        user: getUserCookie(),
        // 不同身份用户显示的菜单
        menuRoutes: [],
    },
    mutations: {
        changeCollapsed(state) {
            state.collapsed = !state.collapsed;
        },
        // 设置用户信息
        setUserInfo(state, userInfo) {
            state.user = userInfo;
            setUserCookie(userInfo);
        },
        // 用户退出时删除cookie
        logout(state) {
            state.user = {
                username: '',
                email: '',
                appkey: '',
                role: ''
            }
            removeUserCookie();
        },
        setMenuRoutes(state, userRoutes) {
            state.menuRoutes = userRoutes;
        }

    },
    actions: {
        changeCollapsed({ commit }) {
            commit('changeCollapsed');
        },
        setUserInfo({ commit }, userInfo) {
            commit('setUserInfo', userInfo);
        },
        logout({ commit }) {
            commit('logout');
        },
        setMenuRoutes({ commit }, userRoutes) {
            commit('setMenuRoutes', userRoutes);
        }
    },
    modules: {},
});