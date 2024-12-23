import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://pgudmwltmlqrejghxwzq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndWRtd2x0bWxxcmVqZ2h4d3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MzY4MDksImV4cCI6MjA1MDUxMjgwOX0.GGLgKjh4F2WXml-efXsOHpnlEi05Hfk45fcOB89172E',
);
