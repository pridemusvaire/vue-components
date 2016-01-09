import CSSHelper from './../../../helpers/CSSHelper';

export default {
    data () {
        return {
            block: 'search-select'
        };
    },
    props: {
        style: null,
        content: '',
        isActivated: false
    },
    computed: {

        /**
         * Computed property which will output the
         * corrected class names for the input
         *
         * @returns {Array} The corrected class name
         */
        inputClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'input');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    },
    methods: {

        /**
         * Method used to activate the drop down
         */
        activate () {
            this.isActivated = true;
        }
    }
};
