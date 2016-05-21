import ElementMixin from './../../../mixins/element';

export default {
    data () {
        return {
            element: 'body'
        };
    },

    mixins: [
        ElementMixin
    ]
};
