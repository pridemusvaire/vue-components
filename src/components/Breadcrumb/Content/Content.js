import CSSUtil from './../../../utils/CSSUtil';

export default {
    data() {
        return {
            element: 'content'
        };
    },

    props: {
        /**
         * The text to be displayed
         */
        text: {
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

    computed: {
        /**
         * The block name from the parent
         *
         * @returns {computed.block|string|string|string}
         */
        block() {
            return this.$parent.block;
        },

        /**
         * Computed property which will output
         * the corrected class names for the content
         *
         * @returns {Array} The corrected class names
         */
        contentClass() {
            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};