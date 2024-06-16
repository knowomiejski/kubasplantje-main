<template>
  <div>
    <Component :is="route.meta.layout"></Component>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
</script>