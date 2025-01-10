import { memo, useCallback } from 'react';
import { useHandleDateTimeRangeChange } from '@/entities/calendar/ui/ranges/helper.ts';
import { formatDate, isMobile } from '@/shared/lib';
import { Input } from '@/shared/ui';
import { CalendarModel } from '../../';
import { Calendar } from '../calendar.tsx';

export const DateRange = memo(() => {
  // Работа с состоянием даты через CalendarModel
  const { startDate, setStartDate } = CalendarModel.useCalendarStore();

  // Взаимодействие с выпадающим списком выбора даты
  const { isShown, rootRef, setIsShown } = useHandleDateTimeRangeChange();

  // Обработчик клика, который запоминает выбранную дату
  const handleClick = useCallback((date: Date | string) => {
    setStartDate(date); // Устанавливаем дату в состояние
    setIsShown(false);  // Скрываем календарь после выбора даты
  }, [setStartDate, setIsShown]);

  return (
    <div style={{ width: isMobile ? '100%' : 'auto'}} ref={rootRef}>
      <Input
        onClick={() => setIsShown((prev) => !prev)} // Показать или скрыть календарь
        label="Дата приема"
        placeholder="_ _._ _._ _"
        value={startDate === '' ? '' : formatDate(startDate)} // Форматирование даты
        fullWidth={isMobile}
        inputProps={{ readOnly: true }} // Поле только для чтения, выбор через календарь
      />

      {isShown && <Calendar onClick={handleClick} />} {/* Показать календарь при необходимости */}
    </div>
  );
});
