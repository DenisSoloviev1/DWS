import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "./style.scss"
import { CalendarSvg } from "@/shared/ui";

const InputContainer = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    position: absolute;
    right: 14px;
    bottom: 16px;
    width: 20px;
    height: 20px;
  }

  input {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f1f4f9;
    border: 1px solid #999b9e;
    border-radius: 16px;
    padding: 16px 14px;
    position: relative;

    &:hover {
      border: 1px solid #1f2020;
    }
  }

  &:focus-within {
    input {
      border: 1px solid #1e78d7;
      box-shadow: 0px 0px 0px 1px rgba(30, 120, 215, 1);
    }
  }
`;

const InputLabel = styled.label`
  max-width: 100%;
  margin-bottom: 8px;
  color: rgb(56, 66, 79);
  white-space: nowrap;
`;

registerLocale("ru", ru);

interface CalendarDateProps {
  onChange: (date: Date | null) => void; // Передаём объект Date или null
  value: Date | null;
  label: string;
  holidays?: string[]; // Список праздничных дат в формате "yyyy-MM-dd"
  occupiedDates?: string[]; // Список занятых дат в формате "yyyy-MM-dd"
}

const CalendarDate: React.FC<CalendarDateProps> = ({
  onChange,
  value,
  label,
  holidays = [],
  occupiedDates = [],
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);

  useEffect(() => {
    if (value && !isNaN(value.getTime())) {
      setSelectedDate(value);
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date); // Передаём объект Date напрямую
  };

  const filterDate = (date: Date) => {
    const day = date.getDay(); // 0 - воскресенье, 6 - суббота
    const formattedDate = date.toISOString().split("T")[0]; // Формат "yyyy-MM-dd"

    // Исключаем субботу, воскресенье, праздники и занятые даты
    return (
      day !== 0 &&
      day !== 6 &&
      !holidays.includes(formattedDate) &&
      !occupiedDates.includes(formattedDate)
    );
  };

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="d MMMM yyyy"
        minDate={new Date()}
        filterDate={filterDate} // Применяем фильтр
        locale="ru"
        placeholderText="_ _._ _._ _"
      />

      <CalendarSvg />
    </InputContainer>
  );
};

export default CalendarDate;
