import ElementMixin from './../../../mixins/element';
import * as PanelTitle from './../Title/Title.vue';

export default {
  data() {
    return {
      element: 'header',
    };
  },

  props: {
    /**
     * The title
     */
    title: {
      type: Object,
      required: false,
    },
  },


  mixins: [
    ElementMixin,
  ],

  components: {
    /**
     * The title of the panel
     */
    PanelTitle,
  },

  computed: {
    /**
     * Computed property which will check whether
     * there is a title
     *
     * @returns {boolean}
     */
    hasTitle() {
      return !!this.title;
    },
  },
};
