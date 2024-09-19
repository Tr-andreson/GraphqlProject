

import { Transporter } from "../../services/nodemailer";
import { MERCHANT_STATUS } from "../../utils/constants";
import { Merchant } from "../../db/modals/merchant.model";
import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql"
import { registerEnumType } from "type-graphql";





registerEnumType(MERCHANT_STATUS, {
  name: "MerchantStatus", // This is the name that will appear in the GraphQL schema
  description: "The status of the merchant", // Optional description
});

// type 
@InputType()
class MerchantInputT {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  brandName: string;

  @Field()
  business: string;

  @Field()
  isActive: boolean;

  // @Field()
  // brand: string;

  // @Field(() => MerchantStatus)  // Apply the enum here
  // status: MerchantStatus;


}

@ObjectType()
class MerchantT {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  brandName: string;

  @Field()
  business: string;

  @Field()
  brand: string;

  @Field()
  status: string;

  @Field()
  isActive: boolean;
}

@Resolver()
export class MerchantResolver {
  constructor() {
  }

  @Query(() => [MerchantT])
  public async getMerchant(): Promise<MerchantT[] | any> {

    try {
      const merchant = await Merchant.find()

      return merchant
    } catch (error) {
      return "error"

    }
  }

  @Mutation(() => String)
  public async addMerchant(
    @Arg("body") body: MerchantInputT
  ): Promise<string> {
    try {
      const merchant = new Merchant({
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
        brandName: body.brandName,
        business: body.business,
        isActive: body.isActive,
        brand: null,
        status: MERCHANT_STATUS.Waiting_Approval
      });

      await merchant.save();

      let mailOptions = {
        from: 'tushar@lovoj.com', // Sender address
        to: body.email, // List of receivers
        subject: "Test Subject for merchant", // Subject line
        text: "Plain text body Merchant", // Plain text body
        // html: html, // HTML body (optional)
      };

      let info = await Transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      return "merchant value"

    } catch (error) {
      console.log(error)
      return "error occured"
    }
  }


}

