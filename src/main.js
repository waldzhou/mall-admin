import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import './styles/reset.less'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

// npm run lint 解决一些格式的兼容性问题