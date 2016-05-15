import CSSUtil from './../../../utils/CSSUtil';
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
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output
         * the corrected class names for the link
         *
         * @returns {Array} The corrected class names
         */
        linkClass () {
            var classes = CSSUtil.elementClasses(this.block, this.element, this.variants);

            if (!this.contextualStyle) {
                this.contextualStyle = this.$parent.contextualStyle;
            }

            classes.push(CSSUtil.contextualClass(CSSUtil.has(this.block, this.element), this.contextualStyle));

            return classes;
        }
    }
};
