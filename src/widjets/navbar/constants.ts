import { Routes } from '@/shared/constants';

export interface Menu {
  id: number;
  path: string;
  label: string;
  allowedRoles: string[]; 
}

export const menuItems: Menu[] = [
  {
    id: 1,
    path: Routes.MAIN,
    label: 'Отдел кадров',
    allowedRoles: ['Работник']
  },
  {
    id: 2,
    path: Routes.MAIN,
    label: 'Отдел по работе с обучающимися',
    allowedRoles: ['Студент'] 
  },
  {
    id: 3,
    path: Routes.NOTFOUND,
    label: 'Отдел по подбору персонала',
    allowedRoles: ['Соискатель']
  },
];
