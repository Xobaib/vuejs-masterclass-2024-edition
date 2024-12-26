<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';

let projects = ref();

// We're using an IIFE function to get the data as soon as possible.(in setup phase)
(async () => {
  const { data, error } = await supabase.from('projects').select();

  if (error) console.log(error);

  projects.value = data;

  console.log('Projects: ', projects.value);
})();
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink :to="{ name: '/' }">Go to home</RouterLink>
    {{ projects }}
  </div>
</template>

<style scoped></style>
