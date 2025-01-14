import { apiRequest } from "@/shared/config";
import { Roles, IOptionStruct } from "@/shared/types";

/**
 * Получение типов заявок.
 * @param role - роль пользователя.
 * @param department - отдел, в который обращаются.
 * @param division - подразделение пользователя.
 * @returns Promise с результатом операции.
 */
export const getType = async (
  role: Roles,
  department: IOptionStruct["id"],
  division: IOptionStruct["id"]
): Promise<IOptionStruct[]> => {
  const response = await apiRequest<IOptionStruct[]>(
    "GET",
    `/api/types-of-requests/?roles=${role}&department=${department}&division=${division}`
  );

  if (!response) {
    throw new Error("Ошибка при получении типов заявок.");
  }

  return response.results;
};
