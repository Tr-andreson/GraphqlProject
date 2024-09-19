import { MiddlewareFn } from "type-graphql"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"


export interface MyContext {
  req: Request,
  res: Response
}

export const VerifyToken: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const sessionToken = context.req.cookies["NEcomCheck"]

  if (!sessionToken) {
    return context.res.json({ success: "false", message: "no Token found" })
  }

  const decoded = jwt.verify(sessionToken, "secret")

  if (!decoded) {
    return context.res.json({ success: "false" })
  }

  return next()
}


// export const verifyToken = (req, res, next) => {
// 	const token = req.cookies.token;
// 	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
// 	try {
// 		const decoded = jwt.verify(token, process.env.JWT_SECRET);
//
// 		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });
//
// 		req.userId = decoded.userId;
// 		next();
// 	} catch (error) {
// 		console.log("Error in verifyToken ", error);
// 		return res.status(500).json({ success: false, message: "Server error" });
// 	}
// };
