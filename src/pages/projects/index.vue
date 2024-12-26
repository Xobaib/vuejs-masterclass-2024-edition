<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import type { Tables } from '../../../database/types';

let projects = ref<Tables<'projects'>[] | null>(null);

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
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
