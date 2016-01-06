import * as CSSHelper from './../../../helpers/CSSHelper';

export default {
    data () {
        return {
            block: 'panel'
        };
    },
    props: {
        style: {},
        content: {}
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the title
         *
         * @returns {Array} The corrected class name
         */
        titleClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'title');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    }
};
