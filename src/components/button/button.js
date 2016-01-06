import * as CSSHelper from './../../helpers/CSSHelper';

module.exports = {
    data () {
        return {
            block: 'button'
        };
    },
    props: {
        style: {},
        content: {},
        isBlock: {},
        type: {},
        action: {},
        link: {}
    },
    computed: {
        buttonClass () {
            var classNames = [];
            var contextualClass = CSSHelper.contextualClass(this.block, this.style);

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
