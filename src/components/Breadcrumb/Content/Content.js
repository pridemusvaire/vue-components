import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'content',
    };
  },

  props: {
    /**
     * The text to be displayed
     */
    content: {
      type: String,
      required: true,
    },
  },

  mixins: [
    ElementMixin,
  ],
};
