import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/components/Login';
import Logon from '@/components/Logon';
import store from '@/store';
import decideRoutes from '@/utils/roleMenuRoutes';


Vue.use(VueRouter);



const routes = [{
        path: '/login',
        name: 'login',
        component: Login, //路由预加载，第一次加载项目的时候较慢
        meta: {
            title: '登录'
        }
    },
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页',
            requireAuth: true
        },
        component: Home,
        children: [{
            path: 'count',
            name: 'count',
            meta: {
                title: '统计',
                requireAuth: true
            },
            component: () =>
                import ('@/views/Home')
        }]
    },
    {
        path: '/logon',
        name: 'logon',
        meta: {
            title: '注册'
        },
        component: Logon
    },
];

const router = new VueRouter({
    routes,
});

// 路由拦截
router.beforeEach((to, from, next) => {
    if (to.path != '/login') {
        if (store.state.user.username && store.state.user.role && store.state.user.appkey) {
            const roleRoutes = decideRoutes(store.state.user.role);
            for (let i = 0; i < roleRoutes.length; i++) {
                router.addRoute(roleRoutes[i]);
            }
            store.dispatch('setMenuRoutes', routes.concat(roleRoutes));
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
})

export default router;