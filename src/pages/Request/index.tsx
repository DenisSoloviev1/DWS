import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FieldsKey,
  createSchema,
  FormControl,
  FormField,
} from "@/widjets/Form";
import { Modal, Flex, SubmitButton } from "@/shared/ui";
import { IRequest } from "@/entities/request";
import { isMobile } from "@/shared/lib";
import { Assent } from "../style";

const fields = ["contactName", "email", "phone", "date"] as FieldsKey[];
const zodSchema = createSchema(fields);

const Request: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<IRequest>({
    resolver: zodResolver(zodSchema),
    mode: "onSubmit",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const contactName = watch("contactName");
  const email = watch("email");
  const phone = watch("phone");

  const onSubmit: SubmitHandler<IRequest> = (values) => {};
  return (
    <>
      <Form submitFn={handleSubmit(onSubmit)}>
        <FormControl
          field={"contactName" as FieldsKey}
          error={errors.contactName?.message || ""}
          control={control}
          render={({ field }) => (
            <FormField
              fieldValue={"contactName" as FieldsKey}
              error={errors.contactName?.message || ""}
              field={field}
            />
          )}
        />

        <Flex
          $direction={isMobile ? "column" : "row"}
          $gap={isMobile ? 0 : 15}
          $justify="space-between"
          $align="flex-start"
        >
          <FormControl
            field={"email" as FieldsKey}
            error={errors.email?.message || ""}
            control={control}
            render={({ field }) => (
              <FormField
                fieldValue={"email" as FieldsKey}
                error={errors.email?.message || ""}
                field={field}
              />
            )}
          />

          <FormControl
            field={"phone" as FieldsKey}
            error={errors.phone?.message || ""}
            control={control}
            render={({ field }) => (
              <FormField
                fieldValue={"phone" as FieldsKey}
                error={errors.phone?.message || ""}
                field={field}
              />
            )}
          />
        </Flex>

        <Assent>
          Нажимая кнопку "Отправить", Вы даёте свое &nbsp;
          <a href="/public/Согласие-на-обработку.pdf" target="_blanck">
            Согласие на обработку персональных данных
          </a>
          &nbsp;в соответствии с Федеральным Законом №152-ФЗ от 27.07.2006 "О
          персональных данных".
        </Assent>

        <SubmitButton
          label={"Отправить"}
          loading={isPending}
          disabled={isPending}
        />
      </Form>

      <Modal isOpen={isOpen} message={"Заявка отправлена!"} />
    </>
  );
};

export default Request;
