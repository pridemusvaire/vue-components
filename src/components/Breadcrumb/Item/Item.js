import ElementMixin from './../../../mixins/element';
import * as BreadcrumbContent from './../Content/Content.vue';
import * as BreadcrumbLink from './../Link/Link.vue';

export default {
    data () {
        return {
            element: 'item'
        };
    },

    props: {
        /**
         * The breadcrumb body
         */
        body: {
            type: Object,
            required: true
        },

        /**
         * The linked page
         */
        link: {
            type: Object,
            required: false
        }
    },

    mixins: [
        ElementMixin
    ],

    components: {
        /**
         * The component for the breadcrumb content
         */
        BreadcrumbContent,

        /**
         * The component for the breadcrumb link
         */
        BreadcrumbLink
    },

    computed: {

        /**
         * Computed property which will output
         * whether the item has a link or not
         */
        hasLink () {
            return !!this.link;
        }
    }
};
