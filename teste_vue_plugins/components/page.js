import { test } from './test.js';

export var Page = Vue.component("Page", {
    
    template: `
      <div>
      <h1>Page</h1>
      <test></test>
      </div>
        
    `,

    components:{
      test
    },
  
    data() {
      return {
        
      }
    },

    methods: {

  
    },
  })
  
