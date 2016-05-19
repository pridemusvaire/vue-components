import CSSUtil from './../../utils/CSSUtil';
import * as PanelBody from './Body/Body.vue';
import * as PanelFooter from './Footer/Footer.vue';
import * as PanelHeader from './Header/Header.vue';

export default {
    data () {
        return {
            block: 'Panel'
        };
    },

    props: {
        /**
         * The header of the panel
         */
        header: {
            type: Object,
            required: false
        },

        /**
         * The body of the panel
         */
        body: {
            type: Object,
            required: false
        },

        /**
         * The footer of the panel
         */
        footer: {
            type: Object,
            required: false
        },

        /**
         * The contextual style
         */
        contextualStyle: {
            type: String,
            required: false
        },

        /**
         * The variants
         */
        variants: {
            type: Array,
            required: false
        }
    },

    components: {
        /**
         * The body of the panel
         */
        PanelBody,

        /**
         * The footer of the panel
         */
        PanelFooter,

        /**
         * The header of the panel
         */
        PanelHeader
    },
    computed: {
        /**
         * Computed property which will check whether
         * there is a header
         *
         * @returns {boolean}
         */
        hasHeader () {
            return !!this.header;
        },

        /**
         * Computed property which will check whether
         * there is a body
         *
         * @returns {boolean}
         */
        hasBody () {
            if (!this.body) {
                return false;
            }

            return this.body.enabled;
        },

        /**
         * Computed property which will check whether
         * there is a footer
         *
         * @returns {boolean}
         */
        hasFooter () {
            if (!this.footer) {
                return false;
            }

            return this.footer.enabled;
        },

        /**
         * Computed property which will output the
         * corrected class names for the panel
         *
         * @returns {Array} The corrected class name
         */
        panelClass () {
            var classes = CSSUtil.blockClasses(this.block, this.variants);
            classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));

            return classes;
        }
    }
};
