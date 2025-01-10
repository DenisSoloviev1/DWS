import axios, { AxiosRequestConfig, Method } from "axios";
import { baseUrl } from ".";

/**
 * Универсальный интерфейс ответа от сервера.
 */
export interface IResponse<T> {
  data: T; // Тип данных, возвращаемых сервером.
  success: boolean; // Указывает на успешность запроса.
  error?: string; // Сообщение об ошибке, если запрос неуспешен.
}

/**
 * Универсальная функция для выполнения HTTP-запросов.
 * @param method - HTTP-метод (GET, POST, PUT, DELETE).
 * @param endpoint - Конечный путь API.
 * @param data - Тело запроса (если нужно).
 * @param params - URL-параметры (опционально).
 * @returns Promise с данными ответа от сервера.
 */
export const apiRequest = async <T>(
  method: Method,
  endpoint: string,
  data?: object,
  params?: object
): Promise<IResponse<T>> => {
  try {
    // const token = localStorage.getItem("authToken");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic29sb3ZpZXZkZW5pczIwMDRAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6ItCh0L7Qu9C-0LLRjNC10LIg0JQu0KEuIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvaGFzaCI6IiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6Ii0yOTAzMzIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiMiIsIm5iZiI6MTczNjUxNDQyMiwiZXhwIjoxNzM2NTE4MDIyLCJpc3MiOiJWZWRLYWYiLCJhdWQiOiJNTUlTTGFiIn0.DipG6IOHOLS2GggEPcLjr1Ftn4GuEx8gXYiUZDe0pmY";
    if (!token) {
      throw new Error("Токен авторизации отсутствует");
    }

    const config: AxiosRequestConfig = {
      method,
      url: `${baseUrl}${endpoint}`, // Полный URL
      data,
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios(config);

    return response.data;
  } catch (error: any) {
    console.error(
      `Ошибка при запросе ${method} ${endpoint}:`,
      error.response || error.message
    );
    throw error;
  }
};
