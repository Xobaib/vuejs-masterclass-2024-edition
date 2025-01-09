<script setup lang="ts">
import { useProjectsStore } from '@/stores/loaders/projects';
import { columns } from '@/utils/tableColumns/projectsColumns';

const pageStore = usePageStore();
pageStore.pageData.title = 'Projects';

const projectsLoader = useProjectsStore();
const { projects } = storeToRefs(projectsLoader);
const { getProjects } = projectsLoader;

await getProjects();
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style scoped></style>
