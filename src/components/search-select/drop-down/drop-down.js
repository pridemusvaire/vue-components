import CSSHelper from './../../../helpers/CSSHelper';
import * as Item from './../item/item.vue';

export default {
    data () {
        return {
            block: 'search-select'
        };
    },
    props: [
        'items',
        'style',
        'isActivated',
        'selectItem'
    ],
    components: {
        'v-search-select-item': Item
    },
    computed: {

        /**
         * Computed property which will output the
         * corrected class names for the drop down
         *
         * @returns {Array} The corrected class name
         */
        dropDownClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'drop-down');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    }
};
