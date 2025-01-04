<script setup lang="ts">
import AppErrorPage from '@/components/appError/AppErrorPage.vue';
import { useErrorStore } from '@/stores/error';

const errorStore = useErrorStore();

errorStore.setError({ error: 'Page not found!', customCode: 404 });
</script>

<template>
  <AppErrorPage />
</template>
