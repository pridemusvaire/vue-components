import CSSUtil from './../../utils/CSSUtil';

export default {
    data () {
        return {
            block: 'Label'
        };
    },

    props: {
        /**
         * The content displayed inside the button
         */
        content: {
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

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the label
         *
         * @returns {Array} The corrected class names
         */
        labelClass () {
            var classes = CSSUtil.blockClasses(this.block, this.variants);
            classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));

            return classes;
        }
    }
};
