# Vue Components #
>vue-components
Vue Components is an easy to use Vue component library

## Components ##
Below is a list of all the components you can use with Vue Components.
### Button ###
### Panel ###
### Search Select ###

## Configuration ##
Almost everything is about Vue Components is configurable.
Don't like the `--` or `__` that is used in the BEM syntax?
You can change that easily!

>todo: make global
Create a file called `vue-components.json`.

### File ###
```
   {
     "element_separator": "__",
     "modifier_separator": "--"
   }
```

### Element Separator ###
You can change the element separator if you don't like the `__` syntax. 
>Important! After you changed this key, you need to recompile the CSS!

### Modifier Separator ###
You can change the modifier separator if you don't like the `--` syntax.
>Important! After you changed this key, you need to recompile the CSS!