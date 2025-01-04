import type { CustomError, ExtendedPostgrestError } from '@/types/Error';
import type { PostgrestError } from '@supabase/supabase-js';

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null);

  const setError = ({
    error,
    customCode,
  }: {
    error: string | PostgrestError;
    customCode: number;
  }) => {
    if (typeof error === 'string') {
      activeError.value = new Error(error);
      activeError.value.customCode = customCode;
      return;
    }

    activeError.value = error;
    activeError.value.statusCode = customCode;
  };

  const clearError = () => {
    activeError.value = null;
    // console.log(activeError.value);
  };

  return { activeError, setError, clearError };
});
