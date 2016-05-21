import ElementMixin from './../../../mixins/element';
import * as DropdownItem from './../Item/Item.vue';

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
