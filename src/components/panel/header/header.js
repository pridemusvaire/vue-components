import * as CSSHelper from './../../../helpers/CSSHelper';
import * as Title from './../title/title.vue';

module.exports = {
    data () {
        return {
            block: 'panel'
        };
    },
    props: {
        style: {},
        title: {}
    },
    components: {
        'v-panel-title': Title
    },
    computed: {

        /**
         * Computed property which will output the
         * corrected class names for the header
         *
         * @returns {Array} The corrected class name
         */
        headerClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'header');
            var contextualClass = CSSHelper.contextualClass(element, this.style);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },

        /**
         * Computed property which will output the
         * corrected style for the title
         *
         * @returns {string} The corrected style
         */
        titleStyle () {
            return this.title.style || this.style;
        }
    }
};
