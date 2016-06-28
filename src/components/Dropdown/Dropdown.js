import BlockMixin from './../../mixins/block';
import * as VButton from './../Button/Button.vue';
import * as DropdownMenu from './Menu/Menu.vue';

export default {
  data() {
    const button = {
      variants: [
        'block',
        'dropdown',
      ],
      link: {
        action: () => {
          this.toggle();
        },
      },
    };

    return {
      block: 'Dropdown',
      button,
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

    /**
     * The chosen item
     */
    chosen: {
      type: Object,
      required: false,
    },

    /**
     * The field identifier
     */
    fieldName: {
      type: String,
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

  computed: {
    /**
     * The icon for the button
     *
     * @returns {Object} The object given to the button
     */
    buttonIcon() {
      const icon = this.isCollapsed ? 'menu-up' : 'menu-down';

      return {
        variants: [
          icon,
        ],
      };
    },

    titleDisplayed() {
      if (this.chosen && this.chosen[this.fieldName]) {
        return this.chosen[this.fieldName];
      }

      return this.title;
    },
  },
};
