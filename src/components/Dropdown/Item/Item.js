import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'item',
    };
  },

  props: {

    /**
     * The chosen item
     */
    chosen: {
      type: Object,
      required: false,
    },

    /**
     * The method used to collapse the dropdown
     */
    collapse: {
      type: Function,
      required: true,
    },

    /**
     * The field identifier
     */
    fieldName: {
      type: String,
      required: true,
    },

    /**
     * The given item
     */
    item: {
      type: Object,
      required: true,
    },
  },

  mixins: [
    ElementMixin,
  ],

  computed: {
    /**
     * The content to be displayed
     *
     * @returns {String}
     */
    content() {
      return this.item[this.fieldName];
    },
  },

  methods: {
    activate(item) {
      this.chosen = item;
      this.collapse();
    },
  },
};
