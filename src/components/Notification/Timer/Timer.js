import CSSUtil from './../../../utils/CSSUtil';

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
        },

        /**
         * The message variants
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

    computed: {
        /**
         * The block name from the parent
         *
         * @returns {string}
         */
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output
         * the corrected class names for the timer
         *
         * @returns {Array} The corrected class names
         */
        timerClass () {
            var classes = CSSUtil.elementClasses(this.block, this.element, this.variants);

            if (!this.contextualStyle) {
                this.contextualStyle = this.$parent.contextualStyle;
            }

            classes.push(CSSUtil.contextualClass(CSSUtil.has(this.block, this.element), this.contextualStyle));

            return classes;
        }
    },

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
