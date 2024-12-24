import { create } from "zustand";
import { Roles, RolesDict } from "@/shared/types";

interface IAuthState {
  isAuth: boolean;
  role: Roles;
  userName: string;
  setUser: (user: string) => void;
  setRole: (roleName: Roles) => void;
  setAuthStatus: (authStatus: boolean) => void;
  resetAuth: () => void;
}

const initialAuth = localStorage.getItem("authToken")
  ? true
  : false || (localStorage.getItem("userRole") as Roles) === RolesDict.APPLICANT
    ? true
    : false;
const initialRole = (localStorage.getItem("userRole") as Roles) || "";
const initialUserName = (localStorage.getItem("userName") as Roles) || "";

export const useAuthStore = create<IAuthState>((set) => ({
  isAuth: initialAuth,
  // role: initialRole,
  role: RolesDict.APPLICANT,
  userName: initialUserName,
  setUser: (newUserName: string) => {
    localStorage.setItem("userName", newUserName);
    set({ userName: newUserName });
  },
  setRole: (newRole: Roles) => {
    localStorage.setItem("userRole", newRole);
    set({ isAuth: true, role: newRole });
  },
  setAuthStatus: (authStatus: boolean) => set({ isAuth: authStatus }),
  resetAuth: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    set({ isAuth: false, role: "" as Roles, userName: "" });
  },
}));
