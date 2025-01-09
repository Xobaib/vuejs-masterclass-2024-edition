import type { Projects } from "@/utils/supaQueries";
import { projectsQuery } from "@/utils/supaQueries";
import { useMemoize } from "@vueuse/core";

export const useProjectsStore = defineStore('projects-store', () => {

    const projects = ref<Projects | null>(null);

    const loadProjects = useMemoize(async (key: string) => await projectsQuery);

    function validateCache() {
        if (projects.value?.length) {
            projectsQuery.then(({ data }) => {
                if (JSON.stringify(projects.value) === JSON.stringify(data)) {
                    console.log('Cached and fresh data matched!');
                    return;
                } else {
                    console.log('Something has changed!');
                    loadProjects.delete('projects')
                }
            })
        }
    }

    async function getProjects() {
        validateCache();

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