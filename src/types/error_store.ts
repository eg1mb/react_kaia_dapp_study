export interface ErrorStore {
  // Error State
  error?: string;

  // Actions
  setError: (error?: string) => void;
  clearError: () => void;
}