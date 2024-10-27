import { z } from "zod";

const createUserValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email address"),
    password: z.string().optional(),

    phone: z.string({
      invalid_type_error: "Contact should be a string",
      required_error: "Contact number is required",
    }),
    address: z.string({
      invalid_type_error: "Address should be a string",
      required_error: "Address is required",
    }),
  }),
});

export const UserValidations = { createUserValidation };
