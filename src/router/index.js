
const routes = [{
    name: '首页',
    path: '/',
    redirect: '/Home/chat',
}, {
    name: '首页',
    path: "/Home",
    component: () => import("@/pages/Home"),
    children: [
        {
            path: "chat",
            name: '聊天',
            component: () => import("@/pages/Chat")
        }, {
            path: "relation",
            name: '联系',
            component: () => import("@/pages/Relation")
        }, {
            path: "announcement",
            name: '帖子',
            component: () => import("@/pages/Announcement")
        }, {
            path: "me",
            name: '个人',
            component: () => import("@/pages/Me")
        }
    ]
}, {
    name: '注册',
    path: '/register',
    component: () => import("@/pages/Register"),
}, {
    name: '登录',
    path: '/login',
    component: () => import("@/components/Login"),
}

]


export default routes;