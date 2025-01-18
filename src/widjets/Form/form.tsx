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
import { IRequest, addRequest, useRequestStore } from "@/entities/request";
import { isMobile } from "@/shared/lib";
import { DateRange, TimeRange } from "@/entities/calendar";
import { DivisionsDropdown, useDivisionsStore } from "@/entities/divisions";
import { TypeDropdown, useTypesStore } from "@/entities/type-of-request";
import { Dialog } from "@mui/material";
import { RolesDict } from "@/shared/types";
import { useAuthStore } from "@/entities/auth";
import { useDepartmentsStore } from "@/entities/departments";

const fields = ["contact_name", "email", "phone", "date"] as FieldsKey[];
const zodSchema = createSchema(fields);

export const Form: React.FC = () => {
  const { role, userName } = useAuthStore();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IRequest>({
    resolver: zodResolver(zodSchema),
    mode: "onSubmit",
    defaultValues: {
      contact_name: userName,
    },
  });

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenNote, setIsOpenNote] = useState<boolean>(false);
  const [onSuccess, setOnSuccess] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(null);
  const [comment, setComment] = useState<string>(""); // Состояние для комментария пользователя

  const { params, note, resetParams } = useRequestStore();
  const { clearFilter: resetType } = useTypesStore();
  const { clearFilter: resetDivision } = useDivisionsStore();
  const { clearFilter: resetDepartment } = useDepartmentsStore();

  useEffect(() => {
    if (note) {
      setIsOpenNote(true);
      const timer = setTimeout(() => {
        setIsOpenNote(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [note]);

  const { isLoading: isPending, mutate } = useMutation({
    mutationKey: ["createRequest"],
    mutationFn: async (data: IRequest) => {
      try {
        return await addRequest(data);
      } catch (error: any) {
        throw error;
      }
    },
  });

  const onSubmit: SubmitHandler<IRequest> = (values) => {
    const mutationValues: IRequest = {
      ...values,
      department: params.department,
      division: params.division,
      type: params.type,
      date: params.date,
    };

    mutate(mutationValues, {
      onSuccess: () => {
        setOnSuccess(true);
        setIsOpenModal(true);
        setTimeout(() => setIsOpenModal(false), 3000);
        setDate(null);
        setComment("");
        resetParams;
        reset({
          contact_name: "",
          phone: "",
          email: "",
        });
        resetType;
        resetDivision;
        resetDepartment;
      },
      onError: () => {
        setOnSuccess(false);
        setIsOpenModal(true);
        setTimeout(() => setIsOpenModal(false), 3000);
      },
    });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {role !== RolesDict.APPLICANT ? <DivisionsDropdown /> : <></>}

        <TypeDropdown />

        <Input
          fullWidth
          label="Примечание"
          placeholder={"Комментарий к обращению"}
          type={"text"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
          <a href="/public/Согласие-на-обработку.pdf" target="_blank">
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
        open={isOpenNote}
        hideBackdrop
        onClose={() => setIsOpenNote(false)}
        PaperProps={{
          style: {
            padding: "10px 20px",
            position: "absolute",
            top: "20px",
            right: "20px",
            margin: "0",
            maxWidth: "280px",
            borderRadius: "16px",
            animation: "slide-x 0.5s ease-in-out",
          },
        }}
      >
        <p>{note}</p>
      </Dialog>

      <Modal isOpen={isOpenModal} onSuccess={onSuccess} />
    </>
  );
};
