import { apiRequest } from "@/shared/config";
import { IRequest } from "../model";

/**
 * Создание новой заявки.
 * @param data - объект с параметраии для создания заявки(department, division, type, contact_name, email, phone, date).
 * @returns Promise с результатом операции.
 */
export const addRequest = async (data: IRequest): Promise<IRequest> => {
  try {
    const response = await apiRequest<IRequest>("POST", "/api/requests/", data);

    return response.results;
  } catch (error: any) {
    throw error;
  }
};
