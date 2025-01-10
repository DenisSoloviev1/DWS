import { memo, useState } from 'react';
import { ArrowLeft, ArrowRight, Flex } from '@/shared/ui';
import { CalendarModel } from '..';

import {
  RenderWeekdays,
  RenderDays,
  monthes,
  dayOfWeeks,
  getDaysInMonth,
} from '../model/';

import {
  CalendarActions,
  CalendarBody,
  CalendarTitle,
  Days,
  Weeek,
} from './style';

interface ICalendarProps {
  onClick: (date: Date | string) => void;
}

export const Calendar = memo(({ onClick }: ICalendarProps) => {
  const { startDate } = CalendarModel.useCalendarStore();
  const [date, setDate] = useState<Date>(new Date());
  const [curr, setCurr] = useState<number>(0);

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    setCurr(0);
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    setCurr(0);
  };

  const days = getDaysInMonth(date);
  const firstDay = days[0].getDay();
  const lastDay = days[days.length - 1].getDay();

  const handleClick = (day: Date) => {
    onClick(day);
  };

  return (
    <CalendarBody>
      <Flex $direction='row' $align="center" $justify="space-between" $gap={15}>
        <CalendarActions type="button" onClick={prevMonth}>
          <ArrowLeft />
        </CalendarActions>
        <CalendarTitle>
          {monthes[date.getMonth()] + ', ' + date.getFullYear()}
        </CalendarTitle>
        <CalendarActions type="button" onClick={nextMonth}>
          <ArrowRight stroke={'#222'} />
        </CalendarActions>
      </Flex>

      <Weeek>
        <RenderWeekdays dayOfWeeks={dayOfWeeks} />
      </Weeek>
      <Days>
        <RenderDays
          date={date}
          days={days}
          lastDay={lastDay}
          firstDay={firstDay}
          curr={startDate === '' ? curr : new Date(startDate).getDate()}
          handleClick={handleClick}
        />
      </Days>
    </CalendarBody>
  );
});
