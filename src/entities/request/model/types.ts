import { IUser, IOptionStruct } from "@/shared/types";

export interface IRequest {
  department: IOptionStruct["id"];
  division: IOptionStruct["id"];
  type: IOptionStruct["id"];
  contact_name: IUser["userName"];
  email: string;
  phone: string;
  date: string |null;
}
