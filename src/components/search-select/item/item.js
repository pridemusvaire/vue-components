import CSSHelper from './../../../helpers/CSSHelper';

export default {
    data () {
        return {
            block: 'search-select'
        };
    },
    props: [
        'item',
        'style',
        'selectItem'
    ],
    computed: {

        /**
         * Computed property which will output the
         * corrected class names for the item
         *
         * @returns {Array} The corrected class name
         */
        itemClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'item');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    }
};
