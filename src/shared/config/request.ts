import { apiRequest } from "@/shared/config";
import { IRequest } from "../types";

/**
 * Создание новой заявки.
 * @param data - объект с параметраии для создания заявки(department, division, type, contact_name, email, phone, date).
 * @returns Promise с результатом операции.
 */
export const addRequest = async (data: IRequest): Promise<boolean> => {
  const response = await apiRequest<boolean>("POST", "/api/requests/", {
    data,
  });

  if (!response) {
    throw new Error("Ошибка при создании заявки.");
  }

  return response.results;
};
