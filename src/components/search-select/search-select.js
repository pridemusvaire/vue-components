import CSSHelper from './../../helpers/CSSHelper';
import * as DropDown from './drop-down/drop-down.vue';
import * as Input from './input/input.vue';

export default {
    data () {
        return {
            block: 'search-select',
            isActivated: false
        };
    },
    props: [
        'input',
        'items',
        'style',
        'selected',
        'dropDown'
    ],
    components: {
        'v-search-select-drop-down': DropDown,
        'v-search-select-input': Input
    },
    computed: {

        /**
         * Computed property which will filter the
         * results
         * @returns {Array} The filtered results
         */
        filteredItems () {
            return this.items.filter(this.userInputFilter);
        },

        /**
         * Computed property which will output the
         * corrected style for the input
         *
         * @returns {string} The corrected style
         */
        inputStyle () {
            return this.input.style || this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the drop down
         *
         * @returns {string} The corrected style
         */
        dropDownStyle () {
            if (this.dropDown && this.dropDown.style) {
                return this.dropDown.style;
            } else {
                return this.style;
            }
        },

        /**
         * Computed property which will output the
         * corrected class names for the search select
         *
         * @returns {Array} The corrected class name
         */
        searchSelectClass () {
            var classNames = [];
            var contextualClass = CSSHelper.contextualClass(this.block, this.style);

            classNames.push(this.block);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    },
    methods: {

        /**
         * Method which will select an item
         *
         * @param item The given result
         */
        selectItem (item) {
            this.input = item.content;
            this.selected = item;
            this.isActivated = false;
        },

        /**
         * Method which will filter the result
         *
         * @param item The given result
         * @returns {boolean} Whether the item is a match
         */
        userInputFilter (item) {
            var content = item.content.toUpperCase();
            var input = this.input.toUpperCase();
            var hasMatch = false;

            if (input === '') {
                hasMatch = true;
            }

            if (content.indexOf(input) > -1) {
                hasMatch = true;
            }

            return hasMatch;
        }
    }
};
