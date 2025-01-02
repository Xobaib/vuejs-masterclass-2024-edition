export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref(false);

  const setError = () => {
    activeError.value = true;
    console.log(activeError.value);
  };

  const clearError = () => {
    activeError.value = false;
    console.log(activeError.value);
  };

  return { activeError, setError, clearError };
});
