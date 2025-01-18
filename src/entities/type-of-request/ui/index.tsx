import React, { SyntheticEvent, useState, useEffect } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
  TextField,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import { useDivisionsStore } from "@/entities/divisions";
import { useAuthStore } from "@/entities/auth";
import { IOptionStruct } from "@/shared/types";
import { useDepartmentsStore } from "@/entities/departments";
import { getType } from "../api";
import { useTypesStore } from "../model/store";
import { useRequestStore } from "@/entities/request";

interface TypesDropdownParams {
  label?: string;
}

const SelectContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 16px;
  background-color: #f1f4f9;
`;

export const TypeDropdown: React.FC<TypesDropdownParams> = ({
  label = "Тип заявки",
  ...props
}) => {
  const { filter, setFilter, clearFilter } = useTypesStore();
  const { setType } = useRequestStore();//выбранный тип заявки
  const { filter: department } = useDepartmentsStore();
  const { filter: division } = useDivisionsStore();
  const [inputValue, setInputValue] = useState<IOptionStruct["name"]>(
    filter.name || ""
  );
  const [types, setTypes] = useState<IOptionStruct[]>([]);//полученные типы заявок
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { role } = useAuthStore();

  //получение типов заявок
  useEffect(() => {
    if (!role) return;

    setIsLoading(true);

    const fetchDepartments = async () => {
      try {
        const response = await getType(role, department.id, division.id);
        setTypes(response);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setTypes([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDepartments();
  }, [department, division]);

  const handleChange = (
    _: SyntheticEvent,
    newValue: IOptionStruct | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "clear") {
      clearFilter();
      setType(0, "")
      setInputValue("");
    } else if (newValue) {
      setFilter({ id: newValue.id, name: newValue.name });
      setType(newValue.id, newValue.note)
    }
  };

  return (
    <SelectContainer>
      <Autocomplete
        multiple={false}
        options={types}
        getOptionLabel={(option) => option.name}
        value={
          filter.name !== "Соискатель"
            ? types?.find((option) => option.name === filter.name) || null
            : null
        }
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        noOptionsText={
          isLoading
            ? "Загрузка данных..."
            : isError
            ? "Ошибка загрузки данных"
            : "Пусто"
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              sx: { borderRadius: "16px" },
            }}
          />
        )}
        PaperComponent={(props) => (
          <Paper {...props} style={{ borderRadius: "16px" }} />
        )}
        {...props}
      />
    </SelectContainer>
  );
};
