/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY);

async function seedProject() {
  const name = faker.lorem.word(3);

  await supabase.from('projects').insert({
    name: name,
    slug: name.toLowerCase(/ /g, '-'),
    status: faker.helpers.arrayElement(['in-progress', 'completed']),
    collaborators: faker.helpers.arrayElements([1, 2, 3]),
  });
}

await seedProject();
