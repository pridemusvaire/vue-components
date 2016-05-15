import CSSUtil from './../../utils/CSSUtil';
import * as BreadcrumbItem from './Item/Item.vue';

export default {
    data () {
        return {
            block: 'Breadcrumb'
        };
    },

    props: {
        /**
         * The breadcrumb items
         */
        items: {
            type: Array,
            required: true
        },

        /**
         * The variant styling
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        /**
         * The displayed breadcrumb item
         */
        BreadcrumbItem
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the breadcrumbs
         *
         * @returns {Array} The corrected class names
         */
        breadcrumbClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    }
};
