<script setup lang="ts">
import { projectsQuery } from '@/utils/supaQueries';
import { type Projects } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/projectsColumns';

const pageStore = usePageStore();
pageStore.pageData.title = 'Projects';

let projects = ref<Projects | null>(null);

async function getProjects() {
  const { data, error } = await projectsQuery;

  if (error) console.log(error);

  projects.value = data;
}

await getProjects();
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style scoped></style>
