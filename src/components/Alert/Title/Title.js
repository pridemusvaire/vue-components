import CSSUtil from './../../../utils/CSSUtil';

export default {
    data () {
        return {
            element: 'title'
        };
    },

    props: {
        /**
         * The message content
         */
        content: {
            type: String,
            required: true
        },

        /**
         * The message variants
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
         * the corrected class names for the title
         *
         * @returns {Array} The corrected class names
         */
        titleClass () {
            if (!this.variants) {
                this.variants = this.$parent.variants;
            }

            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};
