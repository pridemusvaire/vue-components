import CSSUtil from './../utils/CSSUtil';
import StyleMixin from './style';

export default {
    mixins: [
        StyleMixin
    ],

    computed: {
        /**
         * Computed property which will output the
         * corrected class names
         *
         * @returns {Array} The corrected class names
         */
        classNames () {
            var classes = CSSUtil.blockClasses(this.block, this.variants);
            classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));

            return classes;
        }
    }
};
