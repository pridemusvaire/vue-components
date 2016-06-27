import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'title',
    };
  },

  props: {
    /**
     * The message content
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
