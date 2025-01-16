import { create } from "zustand";
import { IRequest } from "./types";

interface IRequestStore {
  params: IRequest;
  note?: string;
  setDepartment: (department: number) => void;
  setDivision: (division: number) => void;
  setType: (type: number, note?: string) => void;
  setDate: (date_request: string) => void;
  resetParams: () => void;
}

export const useRequestStore = create<IRequestStore>((set) => ({
  // Инициализируем объект params с начальными значениями
  params: {
    department: 0,
    division: 1054, //значение по умолчанию для роли соискатель
    type: 0,
    comment: "",
    contact_name: "",
    email: "",
    phone: "",
    date: "",
  },

  setDepartment: (department: number) => {
    set((state) => ({
      params: { ...state.params, department },
    }));
  },

  setDivision: (division: number) => {
    set((state) => ({
      params: { ...state.params, division },
    }));
  },

  setType: (type: number, note?: string) => {
    set((state) => ({
      params: { ...state.params, type },
      note: note,
    }));
  },

  setDate: (date: string) => {
    set((state) => ({
      params: { ...state.params, date },
    }));
  },

  resetParams: () =>
    set(() => ({
      params: {
        department: 0,
        division: 1054,
        type: 0,
        comment: "",
        contact_name: "",
        email: "",
        phone: "",
        date: "",
      },
    })),
}));
