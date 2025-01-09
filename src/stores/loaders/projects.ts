import type { Projects } from "@/utils/supaQueries";
import { projectsQuery } from "@/utils/supaQueries";
import { useMemoize } from "@vueuse/core";

export const useProjectsStore = defineStore('projects-store', () => {

    const projects = ref<Projects | null>(null);

    const loadProjects = useMemoize(async (key: string) => await projectsQuery);

    async function getProjects() {

        const { data, error, status } = await loadProjects('projects');

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