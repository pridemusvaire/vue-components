import CSSUtil from './../../../utils/CSSUtil';

export default {
    data () {
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
         * @returns {string}
         */
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output
         * the corrected class names for the content
         *
         * @returns {Array} The corrected class names
         */
        contentClass () {
            if (!this.variants) {
                this.variants = this.$parent.variants;
            }

            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};