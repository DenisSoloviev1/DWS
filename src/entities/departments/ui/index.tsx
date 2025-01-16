import React from "react";
import { useDepartmentsStore } from "@/entities/departments";
import { IOptionStruct } from "@/shared/types";
import { NavItem } from "./style";
import { useFormStore } from "@/widjets/Form";
import { useRequestStore } from "@/entities/request";

export const DepartmentItem: React.FC<IOptionStruct> = ({ id, name }) => {
  const { setFilter, filter } = useDepartmentsStore();
  const { setDepartment } = useRequestStore();
  const { showForm, setShowForm } = useFormStore();

  const handleClick = (
    id: IOptionStruct["id"],
    name: IOptionStruct["name"]
  ) => {
    const values = { id, name };
    setFilter(values);
    setDepartment(values.id);

    if (!showForm || filter?.id !== id) {
      setShowForm(true);
    }
  };

  const isActive = showForm && filter?.id === id;

  return (
    <NavItem onClick={() => handleClick(id, name)} $isActive={isActive}>
      {name}
    </NavItem>
  );
};
