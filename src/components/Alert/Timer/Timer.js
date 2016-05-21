import ElementMixin from './../../../mixins/element';

export default {
    data () {
        return {
            element: 'timer',
            timer: null
        };
    },

    props: {
        /**
         * The function to close the notification
         */
        closeFunction: {
            type: Function,
            required: true
        }
    },

    mixins: [
        ElementMixin
    ],

    methods: {
        /**
         * Method used to start the timer
         */
        startTimer () {
            this.timer = setTimeout(this.closeFunction, 5000);
        }
    },

    ready () {
        this.startTimer();
    }
};
