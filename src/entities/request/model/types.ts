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
  department: IDepartment["id"];
  division: IDivision["id"];
  typeOfRequest: ITypeOfRequest["id"];
  contactName: IUser["userName"];
  email: string;
  phone: string;
  date: string;
}
