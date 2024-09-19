import zod, { z } from "zod"

export const loginSchema = zod.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(2, { message: "Password is requreid" })
})
