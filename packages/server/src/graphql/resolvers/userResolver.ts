
import { User } from "../../db/modals/user.modal";
import { Ctx, Field, ID, ObjectType, Query, Resolver } from "type-graphql";

// {
//   _id: new ObjectId('66e2996b74e9e5abf583d2e7'),
//   email: 'root1@gmail.com',
//   phoneNumber: '7878478547',
//   firstName: 'name',
//   lastName: 'last',
//   password: '$2b$10$BFwABqJBfwP9QY2qPzWc9uW7JBYlYuGZycXwycJf8CkZ/WcuA/bVi',
//   merchant: null,
//   provider: 'Email',
//   role: 'ROLE MEMBER',
//   created: 2024-09-12T07:34:03.150Z,
//   __v: 0
// } fffffffff

@ObjectType()
class UserT {
  @Field(() => ID)
  _id: string;

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

  @Field()
  merchant?: string;

  @Field()
  provider?: string;

  @Field()
  role?: string;

  @Field()
  created?: Date

  @Field()
  _v?: number
}


@Resolver()
export class UserResolver {
  @Query(() => [UserT])
  public async getUsers(): Promise<UserT[] | any> {
    try {
      const users = await User.find()
      return users

    } catch (error) {
      return "error"

    }
  }

  @Query(() => UserT)
  public async me(
    @Ctx("req") req: Request
  ): Promise<any> {
    // @ts-ignore
    if (!req.session.userId) {
      return null
    }

    // @ts-ignore
    const findvalue = await User.findById(req.session.userId)

    // @ts-ignore
    console.log(findvalue, "ffffffffff")

    return findvalue

  }



}
