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
// App.vue, inside script tag or in a different JS file.
import {panel} from 'vue-components';
export default {
   data () {
      return {
         alert : {
             style: 'primary',
             // Optional
             hasHeader: true,
             // Optional
             hasBody: true,
             // Optional
             hasFooter: true,
             // Optional
             body: {
                 // You can specify a different styling
                 // If left blank or null, the parent style will be used
                 style: 'success'
             },
             // Optional
             header: {
                 // You can specify a different styling
                 // If left blank or null, the parent style will be used
                 style: 'danger'
             },
             // Optional
             title: {
                 // You can specify a different styling
                 // If left blank or null, the parent style will be used
                 style: 'info'
             },
             // Optional
             footer: {
                 // You can specify a different styling
                 // If left blank or null, the parent style will be used
                 style: 'warning'
             }
         }
      }
   },
   components : {
      'v-panel' : panel
   }
};
```

```html
<!-- App.vue, inside template tag or in a different HTML file. -->
<v-panel
        :style="panel.style"
        :header="panel.header"
        :title="panel.title"
        :body="panel.body"
        :footer="panel.footer"
        :has-header="panel.hasHeader"
        :has-body="panel.hasBody"
        :has-footer="panel.hasFooter"
>
    <span slot="title">
        Ik ben een titel!
    </span>
    <div slot="body">
        Ik ben een body
    </div>
    <div slot="footer">
        Ik ben een footer
    </div>
</v-panel>
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