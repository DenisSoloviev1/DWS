import { apiRequest } from "@/shared/config";
import { IRequest } from "../model";

/**
 * Создание новой заявки.
 * @param data - объект с параметраии для создания заявки.
 * @returns Promise с результатом операции.
 */
export const addRequest = async (data: IRequest): Promise<boolean> => {
  const response = await apiRequest<boolean>("POST", "/api/request", { data });

  if (!response.success) {
    throw new Error(response.error || "Ошибка при создании заявки.");
  }

  return response.data;
};
