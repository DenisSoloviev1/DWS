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
}

export interface IUser {
  userName: string;
  role: Roles;
}

export interface IOptionStruct {
  id: number;
  name: string;
}

export interface IRequest {
  department: IOptionStruct["id"];
  division: IOptionStruct["id"];
  type: IOptionStruct["id"];
  contact_name: IUser["userName"];
  email: string;
  phone: string;
  date: string |null;
}
