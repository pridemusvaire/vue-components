import CSSUtil from './../../../utils/CSSUtil';
import BreadcrumbContent from './../Content/Content.vue';

export default {
    data() {
        return {
            element: 'link'
        }
    },

    props: {
        /**
         * The content
         */
        content: {
            type: Object,
            required: true
        },

        /**
         * The route
         */
        to: {
            type: String,
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
    
    components : {
        /**
         * The breadcrumb content component
         */
        BreadcrumbContent
    },
    
    computed: {
        /**
         * The block name from the parent
         * 
         * @returns {string}
         */
        block() {
            return this.$parent.block;
        },


        /**
         * Computed property which will output
         * the corrected class names for the link
         *
         * @returns {Array} The corrected class names
         */
        linkClass() {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};