import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import { CalendarSvg } from "@/shared/ui";
import { useCalendarStore } from "../model";
import { InputContainer, InputLabel } from "./style.ts";

registerLocale("ru", ru);

interface DateProps {
  onChange: (date: Date | null) => void; // Передаём объект Date или null
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);
  const { setDate } = useCalendarStore();

  useEffect(() => {
    if (value && !isNaN(value.getTime())) {
      setSelectedDate(value);
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setDate(date);
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
        filterDate={filterDate}
        locale="ru"
        placeholderText="_ _._ _._ _"
      />

      <CalendarSvg />
    </InputContainer>
  );
};
