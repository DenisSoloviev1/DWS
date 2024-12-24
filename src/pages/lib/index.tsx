import { lazy } from "react";
import { Routes } from "@/shared/constants";
import { IRoute, RolesDict } from "@/shared/types";

export const routes: IRoute[] = [
  {
    id: 0,
    path: Routes.WALCOMING,
    component: lazy(() => import("../Walcoming")),
    isPublic: true,
    roles: [RolesDict.EMPLOYEE, RolesDict.STUDENT],
    withLayout: false,
  },
  {
    id: 1,
    path: Routes.NOTFOUND,
    component: lazy(() => import("../NotFound")),
    isPublic: true,
    roles: [RolesDict.EMPLOYEE, RolesDict.STUDENT],
    withLayout: false,
  },
  {
    id: 2,
    path: Routes.AUTH,
    component: lazy(() => import("../Auth")),
    isPublic: true,
    roles: [RolesDict.EMPLOYEE, RolesDict.STUDENT],
    withLayout: false,
  },
  {
    id: 3,
    path: Routes.MAIN,
    component: lazy(() => import("../Main")),
    isPublic: false,
    roles: [RolesDict.APPLICANT, RolesDict.EMPLOYEE, RolesDict.STUDENT],
    withLayout: true,
  },
  {
    id: 4,
    path: Routes.CALLBACK,
    component: lazy(() => import("../Callback")),
    isPublic: true,
    roles: [RolesDict.EMPLOYEE, RolesDict.STUDENT],
    withLayout: false,
  },
];
