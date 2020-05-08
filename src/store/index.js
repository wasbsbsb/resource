
import loginStatus from './loginStatus'

export default {

    state: {
        name: 'store',
        footerLink: [
            { name: "聊天", path: "/Home/chat" },
            { name: "联系", path: "/Home/relation" },
            { name: "帖子", path: "/Home/announcement" },
            { name: "个人", path: "/Home/me" }
        ],
        headerName: '',
    },

    getters: {
        footerLink(state) {
            return state.footerLink
        },
        headerName(state) {
            return state.headerName
        }

    },

    mutations: {
        headerName(state, name) {
            state.headerName = name
        }
    },

    actions: {
        changeHeaderName(state, name) {
            state.commit('headerName', name);
        }
    },

    modules: {
        loginStatus
    }
}