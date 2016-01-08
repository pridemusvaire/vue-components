import CSSHelper from './../../helpers/CSSHelper';

export default {
    data () {
        return {
            block: 'search-select',
            isActivated: false
        };
    },
    props: {
        input: '',
        items: [],
        style: '',
        selected: {}
    },
    methods: {
        selectItem (item) {
            this.input = item.content;
            this.selected = item;
            this.isActivated = false;
        },
        activate () {
            this.isActivated = true;
        },
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
    },
    computed: {
        filteredItems () {
            var items;

            items = this.items.filter(this.userInputFilter);

            return items;
        },

        searchSelectClass () {
            var classNames = [];
            var contextualClass = CSSHelper.contextualClass(this.block, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },
        inputClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'input');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },
        resultClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'result');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },
        resultsClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'results');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    }
};
