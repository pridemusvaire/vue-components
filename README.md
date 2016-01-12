# Vue Components #
>vue-components

Vue Components is an easy to use Vue component library.
It is written according to the BEM standard.

## Components ##
Below is a list of all the components you can use with Vue Components.
### Alert ###
You can create an alert and make it dismissable or add a timer.
#### Usage ####
In your Vue.js app, include the alert-component.
You can now use the component inside you template-tag.
#### Parameters ####
The alert-component accepts a couple of parameters
##### style #####
You can add a style to the alert.
You can choose between:
 - Primary
 - Success
 - Warning
 - Danger
 - Info
##### title (optional) #####
You can specify a title.
Pass a title as an object.
In the object, you can specify the style or the content.
##### message (optional) #####
You can specify a message.
Pass a message as an object.
In the object, you can specify the style or the content.
##### dismiss (optional) #####
Pass a dismiss as an object.
In the object, you can specify the style.
##### timer (optional) #####
Pass a timer as an object.
In the object, you can specify the style.
##### has-timer (optional) #####
Whether the alert should have timer or not
##### is-dismissable (optional) #####
Whether the alert can be dismissed or not

#### Example ####
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