import CSSUtil from './../../../utils/CSSUtil';

export default {
    data () {
        return {
            element: 'close-button'
        };
    },

    props: {
        /**
         * The function to close the alert
         */
        closeFunction: {
            type: Function,
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
         * the corrected class names for the close button
         *
         * @returns {Array} The corrected class names
         */
        closeButtonClass () {
            if (!this.variants) {
                this.variants = this.$parent.variants;
            }

            return CSSUtil.elementClasses(this.block, this.element, this.variants);
        }
    }
};
