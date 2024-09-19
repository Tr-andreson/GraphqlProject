
import { Brand } from "../../db/modals/brand.model";
import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql"


// type 
@InputType()
class BrandInputT {
  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  imageUrl: string;

  @Field()
  description: string;

  @Field()
  isActive: boolean;
  //
  // @Field()
  // merchant: string;
}

@ObjectType()
class BrandT {
  @Field()
  id: string;

  @Field()
  name: string;
  @Field()
  slug: string;

  @Field()
  imageUrl: string;

  @Field()
  description: string;

  @Field()
  isActive: boolean;

  @Field()
  merchant: string;

}

@Resolver()
export class BrandResolver {
  constructor() {
  }

  @Query(() => [BrandT])
  public async getBrands(): Promise<BrandT[] | any> {

    try {
      const brand = await Brand.find()

      return brand
    } catch (error) {
      return "error"

    }
  }

  @Mutation(() => String)
  public async addBrand(
    @Arg("body") body: BrandInputT
  ): Promise<string> {
    try {
      const brand = new Brand({
        name: body.name,
        slug: body.slug,
        description: body.description,
        isActive: body.isActive,
        imageUrl: body.imageUrl,
        merchant: null
      });

      await brand.save();
      return "brand value"

    } catch (error) {
      console.log(error)
      return "error occured"
    }
  }


}

