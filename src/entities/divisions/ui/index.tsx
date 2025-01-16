import React, { SyntheticEvent, useState, useEffect } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
  TextField,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import { getDivisions, useDivisionsStore } from "@/entities/divisions";
import { useAuthStore } from "@/entities/auth";
import { IOptionStruct, RolesDict } from "@/shared/types";
import { useDepartmentsStore } from "@/entities/departments";
import { useRequestStore } from "@/entities/request";

interface DivisionsDropdownParams {
  label?: string;
}

const SelectContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 16px;
  background-color: #f1f4f9;
`;

export const DivisionsDropdown: React.FC<DivisionsDropdownParams> = ({
  label = "Ваше подразделение",
  ...props
}) => {
  const { filter, setFilter, clearFilter } = useDivisionsStore();
  const { setDivision } = useRequestStore();
  const { filter: department } = useDepartmentsStore();
  const [inputValue, setInputValue] = useState<IOptionStruct["name"]>(
    filter.name || ""
  );
  const [divisions, setDivisions] = useState<IOptionStruct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { role } = useAuthStore();

  //получение подразделений
  useEffect(() => {
    if (!role) return;

    setIsLoading(true);

    const fetchDepartments = async () => {
      try {
        const response = await getDivisions(role, department.id);
        setDivisions(response);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setDivisions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDepartments();
  }, [department]);

  useEffect(() => {
    console.log("Updated divisions:", divisions);
  }, [divisions]); //потом убрать

  const handleChange = (
    _: SyntheticEvent,
    newValue: IOptionStruct | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "clear") {
      clearFilter();
      setDivision(0);
      setInputValue("");
    } else if (newValue) {
      setFilter({ id: newValue.id, name: newValue.name });
      setDivision(newValue.id);
    }
  };

  return (
    <SelectContainer>
      <Autocomplete
        multiple={false}
        options={divisions}
        getOptionLabel={(option) => option.name}
        value={
          filter.name !== "Соискатель"
            ? divisions?.find((option) => option.name === filter.name) || null
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
            label={
              label && role === RolesDict.STUDENT ? "Ваш факультет" : label
            }
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
