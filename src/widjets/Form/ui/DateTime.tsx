import { ReactNode, useEffect } from "react";
import { Flex } from "@/shared/ui";
import { FormItem } from "@/widjets/Form";
import { useCalendarStore } from "@/entities/calendar";
import { useRequestStore } from "@/entities/request";

interface FormDateTimeFieldProps {
  children: ReactNode;
}

export const FormDateTimeField: React.FC<FormDateTimeFieldProps> = ({
  children,
}) => {
  const { date, time } = useCalendarStore();
  const { setDate } = useRequestStore();

  useEffect(() => {
    // setDate(`${date}T${time}`);
    setDate(`${date}T16:00:00`);
  }, [date, time]);

  return (
    <FormItem>
      <Flex $direction={"row"} $gap={15} $justify="flex-start" $align="start">
        {children}
      </Flex>
    </FormItem>
  );
};
