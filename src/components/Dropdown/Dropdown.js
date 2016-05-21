import CSSUtil from './../../utils/CSSUtil';
import * as Button from './../Button/Button.vue';
import * as DropdownMenu from './Menu/Menu.vue';

export default {
    data () {
        return {
            block: 'Dropdown',
            button: {
                variants: [
                    'block',
                    'dropdown'
                ],
                link: {
                    action: () => {
                        this.toggle();
                    }
                }
            },
            isCollapsed: false
        };
    },

    props: {
        /**
         * The title of the dropdown
         */
        title: {
            type: String,
            required: true
        },

        /**
         * The content displayed inside the button
         */
        items: {
            type: Array,
            required: true
        },

        /**
         * The variant styling
         */
        variants: {
            type: Array,
            required: false
        },

        /**
         * The contextual styling
         */
        contextualStyle: {
            type: String,
            required: false
        }
    },

    components: {
        VButton: Button,

        /**
         * The dropdown menu
         */
        DropdownMenu
    },

    computed: {
        /**
         * Computed property which will output the
         * corrected class names for the label
         *
         * @returns {Array} The corrected class names
         */
        dropdownClass () {
            var classes = CSSUtil.blockClasses(this.block, this.variants);
            classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));

            return classes;
        }
    },

    methods: {
        toggle() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
};
