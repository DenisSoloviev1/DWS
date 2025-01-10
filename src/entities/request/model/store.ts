import { create } from "zustand";
import { IRequest } from "./types";

interface IRequestStore {
  params: IRequest;
  setDepartment: (department: number) => void;
  setDivision: (division: number) => void;
  setTypeOfRequest: (type: number) => void;
  setDate: (date_request: string) => void;
}

export const useRequestStore = create<IRequestStore>((set) => ({
  // Инициализируем объект params с начальными значениями
  params: {
    department: 0,
    division: 0,
    typeOfRequest: 0,
    contactName: "",
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

  setTypeOfRequest: (typeOfRequest: number) => {
    set((state) => ({
      params: { ...state.params, typeOfRequest },
    }));
  },

  setContactName: (contactName: string) => {
    set((state) => ({
      params: { ...state.params, contactName },
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
