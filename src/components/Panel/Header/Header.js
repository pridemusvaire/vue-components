import CSSUtil from './../../../utils/CSSUtil';
import * as PanelTitle from './../Title/Title.vue';

export default {
    data () {
        return {
            element: 'header'
        };
    },

    props: {
        /**
         * The title
         */
        title: {
            type: Object,
            required: false
        },

        /**
         * The header variants
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
         * The title of the panel
         */
        PanelTitle
    },

    computed: {
        /**
         * Computed property which will check whether
         * there is a title
         *
         * @returns {boolean}
         */
        hasTitle () {
            return !!this.title;
        },

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
         * the corrected class names for the header
         *
         * @returns {Array} The corrected class names
         */
        headerClass () {
            var classes = CSSUtil.elementClasses(this.block, this.element, this.variants);

            if (!this.contextualStyle) {
                this.contextualStyle = this.$parent.contextualStyle;
            }

            classes.push(CSSUtil.contextualClass(CSSUtil.has(this.block, this.element), this.contextualStyle));

            return classes;
        }
    }
};
