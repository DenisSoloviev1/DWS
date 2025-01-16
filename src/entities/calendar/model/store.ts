import { create } from "zustand";

interface ICalendarStore {
  date: string;
  time: string;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
}

export const useCalendarStore = create<ICalendarStore>((set) => ({
  date: "",
  time: "",
  setDate: (newDate) => set({ date: newDate }),
  setTime: (newTime) => set({ time: newTime }),
}));
