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
        },

        /**
         * The contextual styling
         */
        contextualStyle: {
            type: String,
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
            var classes = CSSUtil.blockClasses(this.block, this.variants);
            classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));

            return classes;
        }
    }
};
