import { MiddlewareFn } from "type-graphql"
import { Request, Response } from "express"


export interface MyContext {
  req: Request,
  res: Response
}

export const VerifyToken: MiddlewareFn<MyContext> = async ({ context }, next) => {
  try {
    const sessionToken = context.req.cookies["redisSession"]
    if (!sessionToken) {
      throw new Error("User Not Authorized !");
    }

    return next()
  } catch (error) {
    return error


  }
}


