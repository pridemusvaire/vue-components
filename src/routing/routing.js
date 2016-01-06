import * as HomeIndexView from './../views/pages/home/index/index.vue';

module.exports = {
    init () {
        this.fetchComponents();
    },

    getRoutes () {
        return {
            '/home': {
                name: 'home.index',
                component: this.components.home.index
            }
        };
    },

    getRedirects () {
        return {
            '/': '/home'
        };
    },

    fetchComponents () {
        this.components = {
            home: {
                index: HomeIndexView
            }
        };
    }
};
