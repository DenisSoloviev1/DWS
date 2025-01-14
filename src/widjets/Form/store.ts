import { create } from "zustand";

interface IFormStore {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
}

export const useFormStore = create<IFormStore>((set) => ({
  showForm: false,
  setShowForm: (showForm) => set({ showForm: showForm }),
}));
