<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import type { Tables } from '../../../database/types';

let tasks = ref<Tables<'tasks'>[] | null>(null);

// We're using an IIFE function to get the data as soon as possible.(in setup phase)
(async () => {
  const { data, error } = await supabase.from('tasks').select();

  if (error) console.log(error);

  tasks.value = data;
})();
</script>

<template>
  <div>
    <h1>Tasks Page</h1>
    <RouterLink :to="{ name: '/' }">Go to home</RouterLink>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
