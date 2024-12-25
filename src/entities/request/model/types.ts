import { IUser } from "@/entities/user";

export interface IDepartment {
  id: number;
  name: string;
}

export interface IDivision {
  id: number;
  name: string;
}

export interface ITypeOfRequest {
  id: number;
  name: string;
}

export interface IRequest {
  contact_name: IUser["userName"];
  email: string;
  phone: string;
  date: string;
  department: IDepartment["id"];
  division: IDivision["id"];
  typeOfRequest: ITypeOfRequest["id"];
}
