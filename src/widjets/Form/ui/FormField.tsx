import { ControllerRenderProps } from "react-hook-form";
import { Input } from "@/shared/ui";
import { FieldsKey, textFieldStaticData } from "@/widjets/Form";

export type FormFieldProps = {
  fieldValue: FieldsKey;
  field: ControllerRenderProps;
  error: string;
};

export const FormField = ({ fieldValue, field, error }: FormFieldProps) => {
  switch (fieldValue) {
    case "contactName":
    case "email":
    case "phone":
      const { label, type, placeholder } = textFieldStaticData[fieldValue];

      return (
        <Input
          fullWidth
          label={label}
          placeholder={placeholder}
          type={type}
          error={!!error}
          {...field}
        />
      );

    default:
      return <></>;
  }
};
