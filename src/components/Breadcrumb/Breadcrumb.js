import BlockMixin from './../../mixins/block';
import * as BreadcrumbItem from './Item/Item.vue';

export default {
    data () {
        return {
            block: 'Breadcrumb'
        };
    },

    props: {
        /**
         * The breadcrumb items
         */
        items: {
            type: Array,
            required: true
        }
    },
    
    mixins: [
        BlockMixin
    ],

    components: {
        /**
         * The displayed breadcrumb item
         */
        BreadcrumbItem
    }
};
