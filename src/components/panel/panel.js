import * as CSSHelper from './../../helpers/CSSHelper';
import * as Header from './header/header.vue';
import * as Body from './body/body.vue';
import * as Footer from './footer/footer.vue';

export default {
    data () {
        return {
            block: 'panel'
        };
    },
    props: {
        style: {},
        header: {},
        body: {},
        footer: {}
    },
    components: {
        'v-panel-header': Header,
        'v-panel-body': Body,
        'v-panel-footer': Footer
    },
    computed: {
        /**
         * Computed property which will output
         * whether there is an header or not
         *
         * @returns {boolean} If there is an header
         */
        hasHeader () {
            return !!this.header;
        },

        /**
         * Computed property which will output
         * whether there is a body or not
         *
         * @returns {boolean} If there is a body
         */
        hasBody () {
            return !!this.body;
        },

        /**
         * Computed property which will output
         * whether there is a footer or not
         *
         * @returns {boolean} If there is a footer
         */
        hasFooter () {
            return !!this.footer;
        },

        /**
         * Computed property which will output the
         * corrected style for the header
         *
         * @returns {string} The corrected style
         */
        headerStyle () {
            return this.header.style || this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the body
         *
         * @returns {string} The corrected style
         */
        bodyStyle () {
            return this.body.style || this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the footer
         *
         * @returns {string} The corrected style
         */
        footerStyle () {
            return this.footer.style || this.style;
        },

        /**
         * Computed property which will output the
         * corrected class names for the panel
         *
         * @returns {Array} The corrected class name
         */
        panelClass () {
            var classNames = [];
            var contextualClass = CSSHelper.contextualClass(this.block, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    }
};
