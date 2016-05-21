import * as DropdownItem from './../Item/Item.vue';
import ElementMixin from './../../../mixins/element';

export default {
    data () {
        return {
            element: 'menu'
        };
    },

    props: {

        /**
         * The items
         */
        items: {
            type: Array,
            required: true
        }
    },
    
    mixins: [
        ElementMixin
    ],

    components: {
        DropdownItem
    }
};
