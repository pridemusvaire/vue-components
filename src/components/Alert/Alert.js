import CSSUtil from './../../utils/CSSUtil';
import * as AlertCloseButton from './CloseButton/CloseButton.html';
import * as AlertMessage from './Message/Message.html';
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
        },

        /**
         * The close button of the alert
         */
        closeButton: {
            type: Object,
            required: false
        },

        /**
         * The variant styling
         */
        variants: {
            type: Array,
            required: false
        }
    },

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
         * whether there is a timer or not
         *
         * @returns {boolean}
         */
        hasTimer () {
            return !!this.timer;
        },

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
            return !!this.closeButton;
        },

        /**
         * Computed property which will output the
         * corrected class names for the breadcrumbs
         *
         * @returns {Array} The corrected class names
         */
        alertClass () {
            return CSSUtil.blockClasses(this.block, this.variants);
        }
    },
    methods: {

        /**
         * Method used to dismiss the alert.
         * It will destroy the vm and clean it up.
         */
        dismissAlert () {
            this.$destroy(true);
        },

        /**
         * Method used to start the timer.
         * When the timer is complete, it will dismiss the alert.
         */
        startTimer () {
            setTimeout(this.dismissAlert, 5000);
        }
    },

    ready () {
        if (this.hasTimer) {
            this.startTimer();
        }
    }
};
