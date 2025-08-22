import { create } from "zustand";
import type { ErrorStore } from "../types/error_store";

export const useErrorStore = create<ErrorStore>((set) => ({
  error: undefined,

  setError: (error?: string): void => {
    set({ error });
  },

  clearError: (): void => {
    set({ error: undefined });
  },
}));