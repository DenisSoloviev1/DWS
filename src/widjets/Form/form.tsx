import React, { useState, useEffect } from "react";
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
import { Modal, Flex, SubmitButton, Input } from "@/shared/ui";
import { IRequest } from "@/shared/types";
import { useRequestStore } from "./store";
import { addRequest } from "@/shared/config";
import { isMobile } from "@/shared/lib";
import { DateRange, TimeRange } from "@/entities/calendar";
import { DivisionsDropdown } from "@/entities/divisions";
import { TypeDropdown } from "@/entities/type-of-request";
import { Dialog } from "@mui/material";

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

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);
  const [onSuccess, setOnSuccess] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(null);
  const [note, setNote] = useState<string>(); //состояние для комментария пользователя

  const { params, comment } = useRequestStore();

  useEffect(() => {
    if (comment) {
      setIsOpenComment(true);
      const timer = setTimeout(() => {
        setIsOpenComment(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [comment]);

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
      note: note,
      date: params.date,
    };

    console.log(mutationValues);
    mutate(mutationValues, {
      onSuccess: () => {
        setOnSuccess(true);
        setIsOpenModal(true);
        setTimeout(() => setIsOpenModal(false), 3000);
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

        <Input
          fullWidth
          label="Примечание"
          placeholder={"Комментарий к обращению"}
          type={"text"}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{ marginBottom: "25px" }}
        />

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

      <Dialog
        open={isOpenComment}
        hideBackdrop
        onClose={() => setIsOpenComment(false)} 
        PaperProps={{
          style: {
            padding: "10px 20px",
            position: "absolute",
            top: "20px",
            right: "20px",
            margin: "0",
            maxWidth: "280px",
            borderRadius: "16px",
            animation: "slide-x 0.5s ease-in-out"
          },
        }}
      >
        <p>{comment}</p>
      </Dialog>

      <Modal isOpen={isOpenModal} onSuccess={onSuccess} />
    </>
  );
};
