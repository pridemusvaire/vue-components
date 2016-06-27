import CSSUtil from './../utils/css';
import StyleMixin from './style';

export default {
  mixins: [
    StyleMixin,
  ],

  computed: {
    /**
     * Computed property which will output the
     * corrected class names
     *
     * @returns {Array} The corrected class names
     */
    classNames() {
      const classes = CSSUtil.blockClasses(this.block, this.variants);
      classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));

      return classes;
    },
  },
};
