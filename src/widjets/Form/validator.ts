import * as zod from "zod";
import { errorMap } from "zod-validation-error";

zod.setErrorMap(errorMap);

// Поля формы
export enum FieldsKey {
  contact_name = "contact_name",
  email = "email",
  phone = "phone",
  date = "date",
}

// Сообщения об ошибках для обязательных полей
enum FieldRequiredWarnings {
  contact_name = "Введите ФИО",
  email = "Введите email",
  phone = "Введите номер телефона",
  date = "Введите дату",
}

// Получение сообщения об обязательном поле
const getRequiredError = (val: FieldsKey) => ({
  required_error:
    FieldRequiredWarnings[val as keyof typeof FieldRequiredWarnings],
});

// Валидация текстовых полей (например, для фамилии и имени)
const validateText = (val: FieldsKey) =>
  zod.string(getRequiredError(val)).trim();

// Валидация email
const validateEmail = (val: FieldsKey) =>
  validateText(val).email({
    message: "Не является e-mail",
  });

// Валидация номера телефона
const validatePhone = (val: FieldsKey) =>
  zod
    .string(getRequiredError(val))
    .regex(/^(\+7|8|9)\d{9,10}$/, {
      message: "Неверный формат",
    })
    .min(10, { message: "Номер телефона слишком короткий" })
    .max(12, { message: "Номер телефона слишком длинный" });

export const createSchema = (fields: FieldsKey[]) => {
  const validatorFields = fields.map((filed) => {
    switch (filed) {
      case "contact_name":
        return { [filed]: validateText(filed) };
      case "phone":
        return { [filed]: validatePhone(filed) };
      case "email":
        return { [filed]: validateEmail(filed) };
      default:
        break;
    }
  });

  return zod.object(Object.assign({}, ...validatorFields));
};
