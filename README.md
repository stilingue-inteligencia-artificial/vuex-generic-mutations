## Vuex Generic Mutations

> This library is no longer maintained.

This package provides base implementations of generic mutations to your [Vuex](https://github.com/vuejs/vuex/) modules. It works by injecting tree mutations on each module that already has a mutation object.

These are the mutations:
- MUTATE: updates an state property with a defined value
- MUTATE_MULTIPLE: updates N state properties with N defined values
- MUTATE_OBJECT_KEY: updates an state object nested property with a defined value
- MUTATE_REMOVE_OBJECT_KEY: update an state removing a target key from the a target object
- MUTATE_REMOVE_OBJECTS_FROM_ARRAY_BY_ATTRIBUTE_AND_VALUE: update an state removing an object from an array by a attribute and a value

#### Usage:
To enjoy the generic mutations, first install the package using npm or yarn.
```bash
$ npm install --save vuex-generic-mutations
```

Now, install the plugin on your vuex store by importing the `plugin` function from the package and passing it to the `plugins` option of your Vuex.Store constructor.

```javascript
// store.js
import myModule from './store/myModule';
import {plugin} from 'vuex-generic-mutations';

const store = new Vuex.Store({
  ..., // Vuex Options
  modules: {
    myModule
  },
  plugins: [plugin]
})
```

Inside a component, you can use the mutations as follow:

```javascript
// Component.vue
export default {
  name: 'foo',
  methods: {
    ...mapMutations('myModule', {
      mutate: 'MUTATE', // Or you can import the MUTATE from the plugin
      mutateMultiple: 'MUTATE_MULTIPLE'
    }),
    baz(someValue) {
      this.mutate({
        property: 'someStateProp',
        with: someValue
      })  
    },
    zaz(foo, bar) {
      this.mutateMultiple([
        {
          property: 'foo',
          with: foo
        },
        {
          property: 'bar',
          with: bar
        }
      ])  
    }      
  }
}
```

This packages exposes tree entities. The `plugin`, the `mutations` object and the `mutationTypes` object.


PRs are welcome.

This package was developed by Hugo Azevedo, Leonardo Bombonato and Danniel Hugo @ Stilingue under GNU General Public License v3.0.
