import React from "react";
import { useDivisionsStore } from "@/entities/divisions";
import { IOptionStruct } from "@/shared/types";
import { DropDown } from "./style";

export const Division: React.FC<IOptionStruct> = ({ id, name }) => {
  const { setFilter } = useDivisionsStore();

  const handleClick = (
    id: IOptionStruct["id"],
    name: IOptionStruct["name"]
  ) => {
    const values = { id, name };
    setFilter(values);
  };

  return <DropDown onClick={() => handleClick(id, name)}>{name}</DropDown>;
};
