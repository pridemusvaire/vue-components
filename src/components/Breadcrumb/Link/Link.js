import ElementMixin from './../../../mixins/element';
import * as BreadcrumbContent from './../Content/Content.vue';

export default {
  data() {
    return {
      element: 'link',
    };
  },

  props: {
    /**
     * The body
     */
    body: {
      type: Object,
      required: true,
    },

    /**
     * The route
     */
    to: {
      type: String,
      required: true,
    },

    /**
     * If vue-router will be used
     */
    vueRouter: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    /**
     * The breadcrumb content component
     */
    BreadcrumbContent,
  },

  mixins: [
    ElementMixin,
  ],
};
