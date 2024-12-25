<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';

// We're using an IIFE function to get the data as soon as possible.(in setup phase)
(async () => {
  const { data, error } = await supabase.from('projects').select();

  if (error) console.log(error);

  console.log('Projects: ' + data);

  return data;
})();
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to project 1</RouterLink>
  </div>
</template>

<style scoped></style>
