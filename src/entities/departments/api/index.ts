import { apiRequest } from "@/shared/config";
import { Roles, IOptionStruct } from "@/shared/types";

/**
 * Получение отделов.
 * @param role - роль пользователя.
 * @returns Promise с результатом операции.
 */
export const getDepartments = async (role: Roles): Promise<IOptionStruct[]> => {
  const response = await apiRequest<IOptionStruct[]>(
    "GET",
    `/api/departments/?roles=${role}`
  );

  return response.results;
};
