import ElementMixin from './../../../mixins/element';

export default {
    data () {
        return {
            element: 'message'
        };
    },

    props: {
        /**
         * The message content
         */
        content: {
            type: String,
            required: true
        }
    },

    mixins: [
        ElementMixin
    ]
};
