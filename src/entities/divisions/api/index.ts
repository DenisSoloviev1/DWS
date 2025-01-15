import { apiRequest } from "@/shared/config";
import { Roles, IOptionStruct } from "@/shared/types";

/**
 * Получение подразделений.
 * @param role - роль пользователя.
 * @param department - отдел, в который обращаются.
 * @returns Promise с результатом операции.
 */
export const getDivisions = async (role: Roles, department: IOptionStruct["id"]): Promise<IOptionStruct[]> => {
  console.log(`role=${role} department=${department}`)
  const response = await apiRequest<IOptionStruct[]>(
    "GET",
    `/api/divisions/?roles=${role}&department=${department}`
  );

  return response.results;
};

