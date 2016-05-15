import CSSUtil from './../../utils/CSSUtil';
import * as NotificationCloseButton from './CloseButton/CloseButton.vue';
import * as NotificationMessage from './Message/Message.vue';
import * as NotificationTimer from './Timer/Timer.vue';
import * as NotificationTitle from './Title/Title.vue';

export default {
    data () {
        return {
            block: 'Notification'
        };
    },

    props: {
        /**
         * The close button of the notification
         */
        closeButton: {
            type: Object,
            required: false
        },

        /**
         * The timer of the notification
         */
        timer: {
            type: Object,
            required: false
        },

        /**
         * The title of the notification
         */
        title: {
            type: Object,
            required: false
        },

        /**
         * The message of the notification
         */
        message: {
            type: Object,
            required: false
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
        /**
         * The notification dismiss button
         */
        NotificationCloseButton,

        /**
         * The notification message
         */
        NotificationMessage,

        /**
         * The notification timer
         */
        NotificationTimer,

        /**
         * The notification timer
         */
        NotificationTitle
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

            return !!this.timer.enabled;
        },

        /**
         * Computed property which will output the
         * corrected class names for the breadcrumbs
         *
         * @returns {Array} The corrected class names
         */
        notificationClass () {
            var classes = CSSUtil.blockClasses(this.block, this.variants);
            classes.push(CSSUtil.contextualClass(this.block, this.contextualStyle));

            return classes;
        },

        /**
         * If the notifications can be closed
         *
         * @returns {boolean}
         */
        isClosable () {
            return !!(this.hasTimer || this.hasCloseButton);
        }
    },

    methods: {
        /**
         * Method used to close the notification.
         * It will destroy the vm and clean it up.
         */
        closeNotification () {
            this.$destroy(true);
        }
    },

    ready () {
        // Check if the notification can be closed
        if (!this.isClosable) {
            console.warn('Warning: Cannot close the notification!');
        }
    }
};
