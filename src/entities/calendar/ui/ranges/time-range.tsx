import { memo, useEffect, useRef, useState } from "react";
import { checkTimeApi } from "../../api/index.ts";
import { useHandleDateTimeRangeChange } from "@/entities/calendar/ui/ranges/helper.ts";
import { isMobile } from "@/shared/lib";
import { ArrowDown, ArrowUp, Input } from "@/shared/ui";
import { CalendarModel } from "../../index.ts";
import { Time, TimeAction, TimeItem, TimeList } from "./style";
import { useChekTimeApiStore } from "../../model/index.ts";

export const TimeRange = memo(() => {
  const { params } = useChekTimeApiStore();
  const authToken = localStorage.getItem("authToken") ?? "";

  const [isFirstRender, setIsFirstRender] = useState(true); // Состояние для отслеживания первого рендера
  const { time, setTime } = CalendarModel.useCalendarStore((state) => state);
  const listRef = useRef<HTMLUListElement>(null);
  const [availableTime, setAvailableTime] = useState<string[]>([]); // Хранение доступного времени

  const { isShown, rootRef, setIsShown } = useHandleDateTimeRangeChange();

  const handleScroll = (offset: number) => {
    if (listRef.current) {
      listRef.current.scrollTop += offset;
    }
  };

  const itemClick = (time: string) => {
    setTime(time);
    setIsShown(false);
  };

  // Вызов API при монтировании компонента
  useEffect(() => {
    const fetchAvailableTime = async () => {
      if (Object.keys(params).length > 0) {
        // Проверка, что params не пустой
        const timeData = await checkTimeApi(params, authToken); // Ожидание ответа от API
        if (timeData) {
          setAvailableTime(timeData); // Установка данных времени в состояние
        }
      }
    };

    !isFirstRender ? fetchAvailableTime() : setIsFirstRender(false);
    
  }, [params]);

  return (
    <div style={{ width: isMobile ? "100%" : "auto" }} ref={rootRef}>
      <Input
        label="Время"
        fullWidth={isMobile}
        value={time}
        onClick={() => setIsShown((prev) => !prev)}
        placeholder="_ _._ _"
        inputProps={{ readOnly: true }}
      />

      {isShown && (
        <Time>
          <TimeAction type="button" onClick={() => handleScroll(-120)}>
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

          <TimeAction type="button" onClick={() => handleScroll(120)}>
            <ArrowDown />
          </TimeAction>
        </Time>
      )}
    </div>
  );
});

// import { memo, useRef } from 'react';

// import { useHandleDateTimeRangeChange } from '@/entities/calendar/ui/ranges/helper.ts';
// import { isMobile } from '@/shared/lib';
// import { ArrowDown, ArrowUp, Input } from '@/shared/ui';
// import { CalendarModel } from '../../index.ts';
// import { Time, TimeAction, TimeItem, TimeList } from './style';

// export const TimeRange = memo(() => {
//   const { time, setTime } = CalendarModel.useCalendarStore((state) => state);
//   const listRef = useRef<HTMLUListElement>(null);

//   const { isShown, rootRef, setIsShown } = useHandleDateTimeRangeChange();

//   const handleScroll = (offset: number) => {
//     if (listRef.current) {
//       listRef.current.scrollTop += offset;
//     }
//   };

//   const itemClick = (time: string) => {
//     setTime(time);
//     setIsShown(false);
//   };

//   return (
//     <div style={{ width: isMobile ? '100%' : 'auto' }} ref={rootRef}>
//       <Input
//         label="Время"
//         fullWidth={isMobile}
//         value={time}
//         onClick={() => setIsShown((prev) => !prev)}
//         placeholder="_ _._ _"
//         inputProps={{ readOnly: true }}
//       />

//       {isShown && (
//         <Time>
//           <TimeAction type="button" onClick={() => handleScroll(-120)}>
//             <ArrowUp />
//           </TimeAction>

//           <TimeList ref={listRef}>
//             {[
//               '8:00',
//               '8:30',
//               '9:00',
//               '9:30',
//               '10:00',
//               '10:30',
//               '11:00',
//               '11:30',
//               '12:00',
//               '12:30',
//               '13:00',
//               '13:30',
//               '14:00',
//               '14:30',
//               '15:00',
//             ].map((el) => (
//               <TimeItem key={el} onClick={() => itemClick(el)}>
//                 {el}
//               </TimeItem>
//             ))}
//           </TimeList>

//           <TimeAction type="button" onClick={() => handleScroll(120)}>
//             <ArrowDown />
//           </TimeAction>
//         </Time>
//       )}
//     </div>
//   );
// });
