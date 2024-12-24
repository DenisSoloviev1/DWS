type mainT = {
  [key: string]: string;
};

export const mainTitle: mainT = {
  "/employee": "Работник",
  "/student": "Студент",
  "/guest": "Гость",
};

export enum Routes {
  WALCOMING = "/",
  NOTFOUND = "*",
  AUTH = "/auth",
  MAIN = "/main",
  CALLBACK = "/callback",
}
