import BlockMixin from './../../mixins/block';
import * as AlertCloseButton from './CloseButton/CloseButton.vue';
import * as AlertMessage from './Message/Message.vue';
import * as AlertTimer from './Timer/Timer.vue';
import * as AlertTitle from './Title/Title.vue';

export default {
    data () {
        return {
            block: 'Alert'
        };
    },

    props: {
        /**
         * The close button of the alert
         */
        closeButton: {
            type: Object,
            required: false
        },

        /**
         * The timer of the alert
         */
        timer: {
            type: Object,
            required: false
        },

        /**
         * The title of the alert
         */
        title: {
            type: Object,
            required: false
        },

        /**
         * The message of the alert
         */
        message: {
            type: Object,
            required: false
        }
    },
    
    mixins: [
        BlockMixin
    ],

    components: {
        /**
         * The alert dismiss button
         */
        AlertCloseButton,

        /**
         * The alert message
         */
        AlertMessage,

        /**
         * The alert timer
         */
        AlertTimer,

        /**
         * The alert timer
         */
        AlertTitle
    },

    computed: {
        /**
         * Computed property which will output
         * whether there is a title or not
         *
         * @returns {boolean} If there is a title
         */
        hasTitle () {
            return !!this.title;
        },

        /**
         * Computed property which will output
         * whether there is a message or not
         *
         * @returns {boolean} If there is a message
         */
        hasMessage () {
            return !!this.message;
        },

        /**
         * Computed property which will output
         * whether there is a close button or not
         *
         * @returns {boolean} If there is a close button
         */
        hasCloseButton () {
            if (!this.closeButton) {
                return false;
            }

            return !!this.closeButton.enabled;
        },

        /**
         * Computed property which will output
         * whether there is a timer or not
         *
         * @returns {boolean} If there is a timer
         */
        hasTimer () {
            if (!this.timer) {
                return false;
            }

            return this.timer.enabled;
        },

        /**
         * If the alerts can be closed
         *
         * @returns {boolean}
         */
        isClosable () {
            return !!(this.hasTimer || this.hasCloseButton);
        }
    },

    methods: {
        /**
         * Method used to close the alert.
         * It will destroy the vm and clean it up.
         */
        closeAlert () {
            this.$destroy(true);
        }
    },

    ready () {
        // Check if the alert can be closed
        if (!this.isClosable) {
            console.warn('Warning: Cannot close the alert!');
        }
    }
};
