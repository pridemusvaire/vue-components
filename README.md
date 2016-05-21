# Vue Components #
>vue-components

Vue Components is an easy to use Vue component library.
It is written according to the BEM standard.

## Table of Contents ##
>todo

### Installation ###
#### Using NPM ####
Run `$ npm install vue-components --save`

#### Using Bower ####
Run `$ bower install vue-components --save`

### Usage ###
#### CommonJS ####
You can include a component like this:
```javascript
var panel = require('vue-components').panel;
```

#### ES6 ####
You can include a component like this:
```javascript
import { panel } from 'vue-components'
```

### Components ###
Below is a list of all the components you can use with Vue Components.
#### Alert ####
You can create an alert and make it dismissable or add a timer.

##### Example #####
```javascript
// App.vue, inside script tag or in a different JS file.
import {alert} from 'vue-components';
export default {
   data () {
      return {
         alert : {
            style : 'success',
            // Optional
            title : {
               // You can specify a different styling
               // If left blank or null, the parent style will be used
               style : 'danger',
               content : 'Title'
            },
            //Optional
            message : {
               // You can specify a different styling
               // If left blank or null, the parent style will be used
               style : 'info',
               content : 'The message'
            },
            // Optional
            dismiss : {
               // You can specify a different styling
               // If left blank or null, the parent style will be used
               style : 'primary'
            },
            // Optional
            timer : {
               // You can specify a different styling
               // If left blank or null, the parent style will be used
               style : 'warning'
            },
            // Optional
            hasTimer : true,
            // Optional
            isDismissable : true
         }
      }
   },
   components : {
      'v-alert' : alert
   }
};
```

```html
<!-- App.vue, inside template tag or in a different HTML file. -->
<v-alert
        :style="alert.style"
        :title="alert.title"
        :message="alert.message"
        :dismiss="alert.dismiss"
        :timer="alert.timer"
        :has-timer="alert.hasTimer"
        :is-dismissable="alert.isDismissable"
></v-alert>
```
#### Panel ####
You can create a panel.

##### Example #####
```javascript
import {Panel} from 'vue-components';

// Vue JS script
export default {
    data() {
        return {
            panel : {
                contextualStyle: 'info',
                variants: ['test'],
                header: {
                    contextualStyle: 'info',
                    variants: ['test'],
                    title: {
                        contextualStyle: 'info',
                        variants: ['test'],
                        content: 'Panel'
                    }
                },
                body: {
                    contextualStyle: 'info',
                    variants: ['test'],
                    enabled: true
                },
                footer: {
                    contextualStyle: 'info',
                    variants: ['test'],
                    enabled: true
                }
            }
        }
    },

    components: {
        Panel
    }
};
```

```html
<!-- Inside your template-tag or a different html-file -->
<panel
        :variants="panel.variants"
        :contextual-style="panel.contextualStyle"
        :body="panel.body"
        :footer="panel.footer"
        :header="panel.header"
>
    <span slot="body">
        Body
    </span>
    <span slot="footer">
        Footer
    </span>
</panel>
```

### License ###
The MIT License (MIT)

Copyright (c) 2016 Vivid Websolutions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.