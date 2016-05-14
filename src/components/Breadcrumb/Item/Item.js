import CSSUtil from './../../../utils/CSSUtil';
import * as BreadcrumbContent from './../Content/Content.vue';
import * as BreadcrumbLink from './../Link/Link.vue';

export default {
    data() {
        return {
            element: 'item'
        }
    },

    props: {
        /**
         * The breadcrumb content
         */
        content: {
            type: Object,
            required: true
        },

        /**
         * The linked page
         */
        link: {
            type: Object,
            required: false
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
         * The component for the breadcrumb content
         */
        BreadcrumbContent,

        /**
         * The component for the breadcrumb link
         */
        BreadcrumbLink
    },

    computed : {
        /**
         * The block name from the parent
         *
         * @returns {string}
         */
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output
         * whether the item has a link or not
         */
        hasLink() {
            return !!this.link;
        },

        /**
         * Computed property which will output
         * the corrected class names for the item
         *
         * @returns {Array} The corrected class names
         */
        itemClass() {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
}