import Vue from 'vue';
import App from './App.vue';

import * as Routing from './routing/routing';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);
Routing.init();
var router = new VueRouter();
router.map(Routing.getRoutes());
router.redirect(Routing.getRedirects());
router.start(Vue.extend({
    el () {
        return 'body';
    },
    components: {App}
}), 'body');
/* eslint-disable no-new */

