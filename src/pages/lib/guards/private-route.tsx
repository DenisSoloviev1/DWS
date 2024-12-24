import { ComponentType, FC } from "react";
import { useAuthStore } from "@/entities/auth";
import { Roles } from "@/shared/types";
import Auth from "@/pages/Auth";
import NotFound from "@/pages/NotFound";
import Main from "@/pages/Main";

interface IPrivateRoute {
  element: ComponentType;
  isPublic: boolean;
  roles: Roles[]; // Массив ключей, таких как 'EMPLOYEE', 'STUDENT', 'APPLICANT'
}

export const PrivateRoute: FC<IPrivateRoute> = ({
  element: RouteComponent,
  isPublic,
  roles,
}) => {
  const { isAuth, role } = useAuthStore();

  // Проверка, является ли страница публичной
  if (isPublic) {
    return <RouteComponent />;
  }

  // Проверка, авторизован ли пользователь
  if (!isAuth) {
    return <Auth />;
  }

  // Если пользователь авторизован, но его роль не соответствует разрешённым ролям, показываем страницу "Not Found"
  if (role && !roles.includes(role as Roles)) {
    return <NotFound />;
  }

  return (
    <Main>
      <RouteComponent />
    </Main>
  );
};
