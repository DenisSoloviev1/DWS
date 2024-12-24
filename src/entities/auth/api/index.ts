import { baseUrl } from "@/shared/config";

export const handleLogin = () => {
  const clientId = "535684";
  const redirectUri = encodeURIComponent(`${baseUrl}/callback`);
  const state = "Ert2q5Z";
  const loginUrl = `https://lk.donstu.ru/WebApp/#/Authorize?client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  // Открываем авторизацию в том же окне
  window.location.href = loginUrl;
};
