import { IOptionStruct, IUser } from "@/shared/types";

export interface IRequest {
  department: IOptionStruct["id"];
  division?: IOptionStruct["id"];
  type: IOptionStruct["id"];
  comment?: string;
  contact_name: IUser["userName"];
  email: string;
  phone: string;
  date: string | null;
}
