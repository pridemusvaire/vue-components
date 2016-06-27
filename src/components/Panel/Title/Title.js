import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'title',
    };
  },

  props: {
    /**
     * The content for the title
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
