import { supabase } from '@/lib/supabaseClient';
import type { QueryData } from '@supabase/supabase-js';

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
    *,
    projects(
     id,
     name,
     slug
   )
 `);
export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>;
//
//
//
export const taskWithProjectQuery = (id: string) => {
  return supabase.from('tasks').select('*, projects(id, name)').eq('id', id).single();
};
export type Task = QueryData<ReturnType<typeof taskWithProjectQuery>>;
//
//
//
export const projectsQuery = supabase.from('projects').select();
export type Projects = QueryData<typeof projectsQuery>;
//
//
//
export const projectQuery = (slug: string) => {
  return supabase
    .from('projects')
    .select(`*, tasks(id, name, status, due_date)`)
    .eq('slug', slug)
    .single();
};
export type Project = QueryData<ReturnType<typeof projectQuery>>;
//
//
//
export const profileQuery = ({ column, value }: { column: string, value: string }) => {
  return supabase.from('profiles').select().eq(column, value).single();
};
