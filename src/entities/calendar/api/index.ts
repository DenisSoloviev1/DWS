import { apiRequest } from "@/shared/config";
import { IRequest } from "@/entities/request";

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
  const response = await apiRequest<string[]>("POST", `/api/list-time/`, data);

  return response.results;
};
