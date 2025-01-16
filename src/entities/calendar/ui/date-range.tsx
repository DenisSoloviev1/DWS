import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { CalendarSvg } from "@/shared/ui";
import { useCalendarStore } from "../model";
import { InputContainer, InputLabel } from "./style.ts";

registerLocale("ru", ru);

interface DateProps {
  onChange: (formattedDate: Date | null) => void; // Передаём отформатированную дату или null
  value: Date | null;
  label: string;
  holidays?: string[]; // Список праздничных дат в формате "yyyy-MM-dd"
  occupiedDates?: string[]; // Список занятых дат в формате "yyyy-MM-dd"
}

export const DateRange: React.FC<DateProps> = ({
  onChange,
  value,
  label,
  holidays = [],
  occupiedDates = [],
}) => {
  const { setDate } = useCalendarStore(); // Функция для сохранения даты

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd"); // Форматируем дату
      onChange(date);
      setDate(formattedDate); // Сохраняем форматированную дату
    } else {
      onChange(null);
      setDate(""); // Сбрасываем значение
    }
  };

  const filterDate = (date: Date) => {
    const day = date.getDay(); // 0 - воскресенье, 6 - суббота
    const formattedDate = format(date, "yyyy-MM-dd"); // Форматируем дату

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
        selected={value}
        onChange={handleDateChange}
        dateFormat="d MMMM yyyy"
        minDate={new Date()}
        filterDate={filterDate}
        locale="ru"
        placeholderText="_ _._ _._ _"
      />

      <CalendarSvg />
    </InputContainer>
  );
};
