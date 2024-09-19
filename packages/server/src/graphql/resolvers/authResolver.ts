import { User } from "../../db/modals/user.modal";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcrypt"
import { Response, Request } from "express"
// import jwt from "jsonwebtoken"
import { HashPassword } from "../../services/bcrypt.service";
import { loginSchema } from "../../schema";
import { ZodError } from "zod";
import crypto from "node:crypto"
// import { generateTokenAndGetCookie } from "../../services/generateToken.service";

declare module "express-session" {
  interface Session {
    userId?: string;  // Add the userId property
  }
}


@InputType()
class AuthInputT {
  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;
}

@InputType()
class AuthLoginT {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
class AuthForgotT {

  @Field()
  email: string;

}


@Resolver()
export class AuthResolver {

  @Query(() => String)
  public async check() {
    try {
      return "Working"

    } catch (error) {
      return "error"

    }
  }

  @Mutation(() => String)
  public async registerUser(
    @Arg("body") body: AuthInputT,
    // @Ctx("res") res: Response,
    // @Ctx("req") req: Request
  ) {
    try {
      const hashedPassword = await HashPassword(body.password)

      const user = new User({
        email: body.email,
        password: hashedPassword,
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber
      })

      const savedUser = await user.save()

      // const token = jwt.sign(body.password, "secret")
      //
      // res.cookie("NEcomCheck", token)
      // @ts-ignore
      // req.session._id = user.id


      if (!savedUser) {
        return "Error in try"
      }


      return "User registerd"

    } catch (error) {
      console.log(error)
      return "Error Occured"

    }
  }



  @Mutation(() => String)
  public async loginUser(
    @Arg("body") body: AuthLoginT,
    @Ctx("res") res: Response,
    @Ctx("req") req: Request
  ) {
    try {
      const { email, password } = loginSchema.parse(body);

      const existingUser = await User.findOne({ email });

      if (!existingUser || !existingUser.password) {
        return "User does not exist or password is not set"; // Handle the case where the user or password is missing
      }
      const passwordCheck = await bcrypt.compare(password, existingUser.password);

      if (!passwordCheck) {
        res.status(401);  // Set status code but don't send a response yet
        return "Password is incorrect";  // Return the message directly
      }

      // // Set the session user ID
      // req.session!.userId = existingUser.id;


      req.session!.userId = existingUser.id

      // req.session!.userId = existingUser.id

      res.status(200);  // Set status code
      return "Login Successful";  // Return the success message
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400);  // Set status code for validation errors
        return JSON.stringify({ error: error.errors });
      }
      res.status(500);  // Set status code for other errors
      console.log(error)
      return "Error Occurred";
    }
  }

  @Mutation(() => String)
  public async forgot(
    @Arg("body") body: AuthForgotT,
    @Ctx("res") res: Response
  ) {
    try {
      const { email } = body

      const isEmailExist = await User.findOne({ email: email })

      if (!isEmailExist) {
        return "no Email is present"

      }

      const buffer = crypto.randomBytes(48);
      const resetToken = buffer.toString('hex');


      isEmailExist.resetPasswordToken = resetToken;
      isEmailExist.resetPasswordExpires = new Date(Date.now() + 3600000);

      isEmailExist.save();


      return `Reset password is ${resetToken}`



    } catch (error) {

      if (error instanceof ZodError) {
        res.status(400);  // Set status code for validation errors
        return JSON.stringify({ error: error.errors });
      }
      res.status(500);  // Set status code for other errors
      return "Error Occurred";
    }

  }

  @Query(() => String)
  public async logout(
    @Ctx("res") res: Response
  ) {
    try {

      res.clearCookie("redisSession")
      return "Logout succesfully"


    } catch (error) {
      return "Error created"

    }
  }

}





