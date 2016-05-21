import ElementMixin from './../../../mixins/element';
import * as BreadcrumbContent from './../Content/Content.vue';

export default {
    data () {
        return {
            element: 'link'
        };
    },

    props: {
        /**
         * The body
         */
        body: {
            type: Object,
            required: true
        },

        /**
         * The route
         */
        to: {
            type: String,
            required: true
        }
    },

    components: {
        /**
         * The breadcrumb content component
         */
        BreadcrumbContent
    },

    mixins: [
        ElementMixin
    ]
};
