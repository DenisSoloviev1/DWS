import { create } from "zustand";
import { IRequest } from "./types";

interface IRequestStore {
  params: IRequest;
  setDepartment: (department: number) => void;
  setDivision: (division: number) => void;
  setType: (type: number) => void;
  setDate: (date_request: string) => void;
}

export const useRequestStore = create<IRequestStore>((set) => ({
  // Инициализируем объект params с начальными значениями
  params: {
    department: 0,
    division: 0,
    type: 0,
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

  setType: (typeOfRequest: number) => {
    set((state) => ({
      params: { ...state.params, typeOfRequest },
    }));
  },

  setContactName: (contact_name: string) => {
    set((state) => ({
      params: { ...state.params, contact_name },
    }));
  },
  setEmail: (email: string) => {
    set((state) => ({
      params: { ...state.params, email },
    }));
  },
  setPhone: (phone: string) => {
    set((state) => ({
      params: { ...state.params, phone },
    }));
  },
  setDate: (date: string) => {
    set((state) => ({
      params: { ...state.params, date },
    }));
  },
}));
