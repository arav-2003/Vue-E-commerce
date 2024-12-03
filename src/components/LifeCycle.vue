<template>
    <div>
      <h1>Vue Lifecycle Hooks</h1>
      <button @click="change()">Update</button>
      <button @click="destroy()">Destroy</button><br>
      <p v-if="show">This is a paragraph</p>

      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue!",
        show: true,
      };
    },
    // 1. beforeCreate()
    beforeCreate() {
      console.log("beforeCreate: components are not initialized.");
    },
  
    // 2. created()
    created() {
      console.log("created: Component is created, data and methods are accessible.", this.message);
    },
  
    // 3. beforeMount
    beforeMount() {
      console.log("beforeMount: Template is compiled, but the component is not yet mounted to the DOM.");
    },
  
    // 4. Mounted
    mounted() {
      console.log("mounted: Component is mounted, and DOM is accessible.");
    },
  
    // 5. beforeUpdate()
    beforeUpdate() {
      console.log("beforeUpdate: Reactive data has changed, but DOM is not yet updated.");
    },
  
    // 6. updated()
    updated() {
      console.log("updated: DOM is updated after reactive data change.");
    },
  
    // 7. beforeUnmount()
    beforeUnmount() {
      console.log("beforeUnmount: Component is about to be removed from the DOM.");
    },
  
    // 8. unmounted()
    unmounted() {
      console.log("unmounted: Component is completely removed from the DOM.");
    },
    methods:{
        change()
        {
            debugger;
            this.message="Vue got updated !";
        },
        destroy()
        {
            this.show = !this.show;
            console.log(this.show ? "this paragraph is not removed" : "this paragraph is removed.");
        }
    },
  };
  </script>
  