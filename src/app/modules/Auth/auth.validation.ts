import { z } from "zod";

const createUserValidation = z.object({
  body: z.object({
    body: z.object({
      name: z.string().nonempty({ message: "Name is required" }),
      photo: z.string().optional(),
      email: z.string().email({ message: "Invalid email address" }),
      role: z.enum(["admin", "user"], {
        message: "Role must be either 'admin' or 'user'",
      }),
      address: z.string().optional(),
      phone: z.string({ message: "invalid phone number" }).optional(),
      password: z.string(),
    }),
  }),
});

export const UserValidations = { createUserValidation };
