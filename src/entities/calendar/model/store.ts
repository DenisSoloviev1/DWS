import { create } from "zustand";

interface ICalendarStore {
  date: Date | null;
  time: string;
  setDate: (date: Date | null) => void;
  setTime: (time: string) => void;
}
export const useCalendarStore = create<ICalendarStore>((set) => ({
  date: null,
  time: "",
  setDate: (newDate) => set({ date: newDate }),
  setTime: (newTime) => set({ time: newTime }),
}));
