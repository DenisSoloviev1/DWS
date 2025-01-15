import { apiRequest } from "@/shared/config";
import { IRequest } from "@/shared/types";

interface ITimeParams {
  department: IRequest["department"];
  division: IRequest["division"];
  type: IRequest["type"];
  date_request: IRequest["date"];
}
/**
 * Получение доступного времени.
 * @param data - объект значений(department, division, type, date)
 * @returns Promise с результатом операции.
 */
export const getTime = async (data: ITimeParams): Promise<string[]> => {
  const response = await apiRequest<string[]>("POST", `/api/list-time/`, {
    data,
  });

  if (!response) {
    throw new Error("Ошибка при получении свободного времени.");
  }

  return response.results;
};
