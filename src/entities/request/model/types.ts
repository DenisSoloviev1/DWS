import { IUser, OptionStruct } from "@/shared/types";

export interface IRequest {
  department: OptionStruct["id"];
  division: OptionStruct["id"];
  typeOfRequest: OptionStruct["id"];
  contact_name: IUser["userName"];
  email: string;
  phone: string;
  date: string;
}
