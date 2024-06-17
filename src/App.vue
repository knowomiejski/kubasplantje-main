<template>
  <div>
    <Component :is="route.meta.layout"></Component>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<style lang="scss">
html {
  ::-moz-selection { /* Code for Firefox */
    color: #95ec99;
    background: #fff3aa;
  }

  ::selection {
    color: #ffffff;
    background: #95ec99;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #030115;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #95ec99;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #95ec99;
  }
}

body {
  background-color: #030115;
}

#app {
  font-family: 'Courier Prime', monospace;
  color: white;
}
</style>
