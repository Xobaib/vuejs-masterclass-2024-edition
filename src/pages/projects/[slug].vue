<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1 v-if="'slug' in route.params">Project {{ route.params?.slug }}</h1>
  </div>
</template>

<style scoped></style>
