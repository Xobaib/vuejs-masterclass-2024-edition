import { projectsQuery } from "@/utils/supaQueries";
import type { Projects } from "@/utils/supaQueries";

export const useProjectsStore = defineStore('projects-store', () => {

    let projects = ref<Projects | null>(null);

    async function getProjects() {
        if (projects.value?.length) return;

        const { data, error, status } = await projectsQuery;

        if (error) {
            useErrorStore().setError({ error, customCode: status });
            console.log(error);
        }

        projects.value = data;
    }

    return {
        projects,
        getProjects,
    };
});