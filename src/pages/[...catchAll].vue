<script setup lang="ts">
import AppErrorPage from '@/components/appError/AppErrorPage.vue';
import { useErrorStore } from '@/stores/error';

const errorStore = useErrorStore();

errorStore.setError();
</script>

<template>
  <AppErrorPage />
</template>
