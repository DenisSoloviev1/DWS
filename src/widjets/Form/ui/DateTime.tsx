import { ReactNode, useEffect } from "react";
import { Flex } from "@/shared/ui";
import { FormItem, useRequestStore } from "@/widjets/Form";
import { useCalendarStore } from "@/entities/calendar";

interface FormDateTimeFieldProps {
  children: ReactNode;
}

export const FormDateTimeField: React.FC<FormDateTimeFieldProps> = ({
  children,
}) => {
  const { date, time } = useCalendarStore();
  const { setDate } = useRequestStore();

  useEffect(() => {
    setDate(`${date}T${time}Z`);
  }, [time]);

  return (
    <FormItem>
      <Flex $direction={"row"} $gap={15} $justify="flex-start" $align="start">
        {children}
      </Flex>
    </FormItem>
  );
};
