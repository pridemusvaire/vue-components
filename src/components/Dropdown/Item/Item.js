import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'item',
    };
  },

  props: {
    /**
     * The content to be displayed
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
