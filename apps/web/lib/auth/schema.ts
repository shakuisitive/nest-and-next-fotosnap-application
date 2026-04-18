import z from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Must must be at least 8 characters"),
})

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Must must be at least 8 characters"),
  confirmPassword: z.string()
})
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
  })

export type SignupFormData = z.infer<typeof signupSchema>
export type LoginFormData = z.infer<typeof loginSchema>