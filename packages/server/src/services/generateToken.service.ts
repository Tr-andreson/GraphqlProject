import jwt from "jsonwebtoken"
import { Response } from "express"


export const generateTokenAndGetCookie = (userId: any, res: Response): string => {
  const token = jwt.sign({ userId }, "secret", { expiresIn: "7d" })

  res.cookie("ECOMMERCE", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  })

  return token
}
