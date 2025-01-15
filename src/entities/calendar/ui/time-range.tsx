import { memo, useEffect, useRef, useState } from "react";
import { useHandleDateTimeRangeChange } from "./helper.ts";
import { formatDate } from "@/shared/lib";
import { ArrowDown, ArrowUp } from "@/shared/ui";
import { ClockSvg } from "@/shared/ui";
import {
  InputContainer,
  InputLabel,
  Time,
  TimeAction,
  TimeItem,
  TimeList,
} from "./style.ts";
import { getTime } from "../api/index.ts";
import { useCalendarStore } from "../model/store.ts";
import { useDepartmentsStore } from "@/entities/departments/index.ts";
import { useDivisionsStore } from "@/entities/divisions/index.ts";
import { useTypesStore } from "@/entities/type-of-request/index.ts";

interface TimeProps {
  label: string;
}

export const TimeRange = memo<TimeProps>(({ label }) => {
  const { filter: department } = useDepartmentsStore();
  const { filter: division } = useDivisionsStore();
  const { filter: type } = useTypesStore();
  const { date } = useCalendarStore();
  const { time, setTime } = useCalendarStore();

  const listRef = useRef<HTMLUListElement>(null);
  const [availableTime, setAvailableTime] = useState<string[]>([]); // Хранение доступного времени
  const [isFirstRender, setIsFirstRender] = useState(true);

  const { isShown, rootRef, setIsShown } = useHandleDateTimeRangeChange();

  //дата и время для получение свободного времени
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = formatDate(date);
  const formattedDateTime = `${formattedDate}T${formattedTime}Z`

  const params = {
    department: department.id,
    division: division.id,
    type: type.id,
    date_request: formattedDateTime,
  };

  const handleScroll = (offset: number) => {
    if (listRef.current) {
      listRef.current.scrollTop += offset;
    }
  };

  const itemClick = (time: string) => {
    setTime(time);
    setIsShown(false);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false); // Помечаем, что это был первый рендер
      return;
    }

    const fetchAvailableTime = async () => {
      if (Object.keys(params).length > 0) {
        const timeData = await getTime(params); // Запрос к API
        if (timeData) {
          setAvailableTime(timeData); // Устанавливаем доступное время
        }
      }
    };

    fetchAvailableTime();
  }, [params.date_request]);

  return (
    <InputContainer ref={rootRef}>
      <InputLabel>{label}</InputLabel>

      <input
        value={time}
        onClick={() => setIsShown((prev: boolean) => !prev)}
        placeholder="_ _._ _"
        readOnly
      />

      <ClockSvg />

      {isShown && (
        <Time>
          <TimeAction type="button" onClick={() => handleScroll(-120)} id="1">
            <ArrowUp />
          </TimeAction>

          <TimeList ref={listRef}>
            {availableTime.length > 0 ? (
              availableTime.map((el: string) => (
                <TimeItem key={el} onClick={() => itemClick(el)}>
                  {el}
                </TimeItem>
              ))
            ) : (
              <TimeItem>пусто</TimeItem>
            )}
          </TimeList>

          <TimeAction type="button" onClick={() => handleScroll(120)} id="2">
            <ArrowDown />
          </TimeAction>
        </Time>
      )}
    </InputContainer>
  );
});
