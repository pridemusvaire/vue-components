import CSSHelper from './../../helpers/CSSHelper';

export default {
    data () {
        return {
            block: 'button'
        };
    },
    props: [
        'action',
        'content',
        'isBlock',
        'link',
        'style',
        'type'
    ],
    computed: {

        /**
         * Computed property which will output the
         * corrected class names for the button
         *
         * @returns {Array} The corrected class names
         */
        buttonClass () {
            var classNames = [];
            var contextualClass = CSSHelper.contextualClass(this.block, this.style);

            classNames.push(this.block);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            if (this.isBlock) {
                classNames.push(CSSHelper.variant(this.block, 'block'));
            }

            return classNames;
        }
    }
};
