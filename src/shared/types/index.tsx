import { LazyExoticComponent, ComponentType } from "react";

type ValueOf<T> = T[keyof T];

// roles

export const RolesDict = {
  EMPLOYEE: "Работник",
  STUDENT: "Студент",
  APPLICANT: "Соискатель",
} as const;

export type Roles = ValueOf<typeof RolesDict>;

// router types

export interface IRoute {
  id: number;
  path: string;
  isPublic: boolean;
  component: LazyExoticComponent<ComponentType<any>>;
  roles: Roles[];
  withLayout: boolean;
}

// departments

export interface IDepartment {
  id: number;
  name: string;
  executor: number;
}

// request

export interface IRequest {
  contact_name: string;
  email: string;
  phone: string;
  date: string;
  department: number;
  division: number;
  type: number;
}

// calendar

export interface ICalendar {
  month: Date | string;
  day: Date | string;
  time: Date | string;
}

//user
export interface IUser {
  userName: string;
  
}
