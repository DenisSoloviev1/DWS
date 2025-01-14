import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldsKey,
  FormControl,
  FormField,
  FormDateTimeField,
  StyledForm,
  Assent,
} from "@/widjets/Form";
import { createSchema } from "./validator";
import { Modal, Flex, SubmitButton } from "@/shared/ui";
import { IRequest } from "@/shared/types";
import { useRequestStore } from "./store";
import { addRequest } from "@/shared/config";
import { isMobile } from "@/shared/lib";
import { DateRange, TimeRange } from "@/entities/calendar";
import { DivisionsDropdown } from "@/entities/divisions";
import { TypeDropdown } from "@/entities/type-of-request";

const fields = ["contact_name", "email", "phone", "date"] as FieldsKey[];
const zodSchema = createSchema(fields);

export const Form: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IRequest>({
    resolver: zodResolver(zodSchema),
    mode: "onSubmit",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [onSuccess, setOnSuccess] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(null);

  const { params } = useRequestStore();

  const { isLoading: isPending, mutate } = useMutation({
    mutationKey: ["createRequest"],
    mutationFn: async (data: IRequest) => {
      return await addRequest(data);
    },
  });

  const onSubmit: SubmitHandler<IRequest> = (values) => {
    const mutationValues: IRequest = {
      ...values,
      department: params.department,
      division: params.division,
      type: params.type,
      date: date ? date.toISOString() : null,
    };

    mutate(mutationValues, {
      onSuccess: () => {
        setOnSuccess(true);
        setIsOpen(true);
        setTimeout(() => setIsOpen(false), 3000);
        reset({ contact_name: "", email: "", phone: "" });
        setDate(null);
      },
      onError: () => {
        setOnSuccess(false);
      },
    });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <DivisionsDropdown />
        <TypeDropdown />

        <FormControl
          field={"contact_name" as FieldsKey}
          error={errors.contact_name?.message || ""}
          control={control}
          render={({ field }) => (
            <FormField
              fieldValue={"contact_name" as FieldsKey}
              error={errors.contact_name?.message || ""}
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

        <FormDateTimeField>
          <DateRange
            onChange={(newDate) => setDate(newDate)}
            value={date}
            label={"Выберите дату"}
          />

          <TimeRange label={"Выберите время"} />
        </FormDateTimeField>

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
      </StyledForm>

      <Modal isOpen={isOpen} onSuccess={onSuccess} />
    </>
  );
};
