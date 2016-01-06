import * as Button from './../../../../components/button/button.vue';
import * as Panel from './../../../../components/panel/panel.vue';

module.exports = {
    data () {
        return {
            panel: {
                style: 'primary',
                header: {
                    title: {
                        content: 'This is the title'
                    }
                },
                body: {
                    content: 'Test'
                },
                footer: {
                    content: '&copy; Vivid Websolutions'
                }
            }
        };
    },
    components: {
        'v-button': Button,
        'v-panel': Panel
    },
    ready () {
    },
    methods: {}
};
