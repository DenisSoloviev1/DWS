import { IRequest } from "@/entities/request";
import { apiRequest } from "@/shared/config";
import { IOptionStruct } from "@/shared/types";

/**
 * Получение доступного времени.
 * @param department - отдел, в который обращаются.
 * @param division - подразделение пользователя.
 * @param type - тип заявки.
 * @param date_request - дата обращения.
 * @returns Promise с результатом операции.
 */
export const getTime = async (
  department: IRequest["department"],
  division: IRequest["division"],
  type: IRequest["type"],
  date: IRequest["date"]
): Promise<IOptionStruct[]> => {
  const response = await apiRequest<IOptionStruct[]>("GET", `/api/list-time/`, {
    department: department,
    division: division,
    type: type,
    date_request: date,
  });

  if (!response) {
    throw new Error("Ошибка при получении свободного времени.");
  }

  return response.results;
};
