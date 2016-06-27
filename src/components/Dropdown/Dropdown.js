import BlockMixin from './../../mixins/block';
import * as VButton from './../Button/Button.vue';
import * as DropdownMenu from './Menu/Menu.vue';

export default {
  data() {
    return {
      block: 'Dropdown',
      button: {
        variants: [
          'block',
          'dropdown',
        ],
        link: {
          action: () => {
            this.toggle();
          },
        },
      },
      isCollapsed: false,
    };
  },

  props: {
    /**
     * The title of the dropdown
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * The content displayed inside the button
     */
    items: {
      type: Array,
      required: true,
    },
  },

  components: {
    VButton,

    /**
     * The dropdown menu
     */
    DropdownMenu,
  },

  mixins: [
    BlockMixin,
  ],

  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
