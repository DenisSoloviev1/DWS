import React from "react";
import { useDepartmentsStore } from "@/entities/departments";
import { IOptionStruct } from "@/shared/types";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/shared/constants";
import { NavItem } from "./style";

export const Department: React.FC<IOptionStruct> = ({ id, name }) => {
  const { setFilter } = useDepartmentsStore();
  const navigate = useNavigate();

  const handleClick = (
    id: IOptionStruct["id"],
    name: IOptionStruct["name"]
  ) => {
    const values = { id, name };
    setFilter(values);
    navigate(Routes.REQUEST);//сделать какую-то проверку, чтобы если пользователь уже на этой вкладке, навигация не работала
  };

  return <NavItem onClick={() => handleClick(id, name)}>{name}</NavItem>;
};
