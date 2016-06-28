import ElementMixin from './../../../mixins/element';
import * as DropdownItem from './../Item/Item.vue';

export default {
  data() {
    return {
      element: 'menu',
    };
  },

  props: {

    /**
     * The items
     */
    items: {
      type: Array,
      required: true,
    },

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
  },

  mixins: [
    ElementMixin,
  ],

  components: {
    DropdownItem,
  },
};
