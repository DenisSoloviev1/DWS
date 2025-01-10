import { memo, PropsWithChildren } from "react";
import { Flex } from "@/shared/ui";
import { FormItem } from "@/widjets/Form";

export const FormDateTimeField = memo(({ children }: PropsWithChildren) => {
  return (
    <FormItem>
      <Flex $direction={"row"} $gap={15} $justify="flex-start" $align="start">
        {children}
      </Flex>
    </FormItem>
  );
});
