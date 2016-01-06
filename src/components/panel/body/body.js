import * as CSSHelper from './../../../helpers/CSSHelper';

module.exports = {
    data () {
        return {
            block: 'panel'
        };
    },
    props: {
        style: {},
        content: {},
        hasFooter: {},
        hasHeader: {}
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the body
         *
         * @returns {Array} The corrected class name
         */
        bodyClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'body');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            if (!this.hasFooter && !this.hasHeader) {
                classNames.push(CSSHelper.variant(element, 'border-radius'));
            } else if (!this.hasFooter) {
                classNames.push(CSSHelper.variant(element, 'no-border-radius-top'));
            } else if (!this.hasHeader) {
                classNames.push(CSSHelper.variant(element, 'no-border-radius-bottom'));
            }

            return classNames;
        }
    }
};
