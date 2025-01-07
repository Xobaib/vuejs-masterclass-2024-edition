import { supabase } from '@/lib/supabaseClient';
import { profileQuery } from '@/utils/supaQueries';
import type { Session, User } from '@supabase/supabase-js';
import type { Tables } from 'database/types';

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null);
  const profile = ref<null | Tables<'profiles'>>(null);

  async function setAuth(userSession: null | Session = null) {
    if (!userSession) {
      user.value = null;
      profile.value = null;
      return;
    }
    user.value = userSession.user;
    await setProfile();
  }

  async function setProfile() {
    if (!user.value) {
      profile.value = null;
      return;
    }

    if (!profile.value || profile.value.id !== user.value.id) {
      const { data, error } = await profileQuery(user.value.id);

      profile.value = data || null;
    }
  }

  async function getSession() {
    const { data } = await supabase.auth.getSession();

    if (data.session?.user) {
      await setAuth(data.session);
    }
  }

  return { user, profile, setAuth, getSession };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
