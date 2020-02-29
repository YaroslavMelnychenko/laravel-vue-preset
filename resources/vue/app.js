require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

var Root = new Vue({
    render: h => h(App),
    router
}).$mount('#app');

window.App = Root.$children[0];