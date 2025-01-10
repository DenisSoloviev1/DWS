import { apiRequest } from "@/shared/config";
import { Roles, IOptionStruct } from "@/shared/types";

/**
 * Получение доступных подразделений.
 * @param role - роль пользователя.
 * @returns Promise с результатом операции.
 */
export const getDepartments = async (role: Roles): Promise<IOptionStruct[]> => {
  const response = await apiRequest<{ results: IOptionStruct[] }>(
    "GET",
    `/api/departments/?roles=${role}`
  );

  if (!response.success) {
    throw new Error(response.error || "Ошибка при получении подразделений.");
  }

  return response.data.results;
};
