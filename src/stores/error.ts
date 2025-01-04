import type { CustomError } from '@/types/Error';

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError>(null);

  const setError = ({ error, customCode }: { error: string; customCode: number }) => {
    activeError.value = new Error(error);
    activeError.value.customCode = customCode;
    // console.log(activeError.value);
  };

  const clearError = () => {
    activeError.value = null;
    // console.log(activeError.value);
  };

  return { activeError, setError, clearError };
});
