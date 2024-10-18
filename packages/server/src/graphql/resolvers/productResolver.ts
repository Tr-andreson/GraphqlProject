import { Product } from "../../db/modals/product.modal";
import { Arg, Field, InputType, Mutation, ObjectType, Query, Resolver, ID, Ctx } from "type-graphql"
import slugger from "slug"
import { GraphQLUpload, FileUpload } from "graphql-upload-ts";
import path from "node:path"
import { createWriteStream } from "node:fs"
import { console } from "node:inspector";

import i from "i18n"
import { Request } from "express";


// type 
@InputType()
class ProductInputT {
  @Field()
  sku: string;

  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field()
  imageKey: string;

  @Field()
  brand: string;

  @Field()
  description: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  taxable: boolean;

  @Field()
  isActive: boolean;
}


@InputType()
class UploadFileT {
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string

  // @Field()
  // imageLink: string
}

@ObjectType()
class ProductT {
  @Field(() => ID)
  id: string;

  @Field()
  sku: string;


  @Field()
  name: string;


  @Field()
  slug: string;

  @Field()
  imageUrl: string;

  @Field()
  imageKey: string;

  @Field()
  brand: string;

  @Field()
  description: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  taxable: boolean;

  @Field()
  isActive: boolean;
}

// const files = [];

@Resolver()
export class ProductResolver {
  constructor() {
  }

  @Query(() => [ProductT])
  // @UseMiddleware(VerifyToken)
  public async getProduct(
    @Arg("limit") limit: number,
    @Ctx("request") request: Request
  ): Promise<ProductT[] | any> {

    try {
      const location = i.getLocale(request)
      console.log(location, "llll")
      console.log("working")

      const product = await Product.find().limit(limit)

      return product
    } catch (error) {
      return "error"

    }
  }

  // TODO:Get PRODUCT BY ID
  @Query(() => ProductT)
  public async getProductBySlug(
    @Arg("slug") slug: string
  ): Promise<ProductT | any> {
    try {
      const product = await Product.findOne({ slug: slug })

      if (!product) {
        return "NO Products found"
      }
      return product

    } catch (error) {
      return "error Occured"

    }
  }

  // TODO:Get PRODUCT BY ID
  @Query(() => ProductT)
  public async getSingleProductById(
    @Arg("id") id: string
  ): Promise<ProductT | any> {

    try {
      const product = await Product.findOne({ _id: id })

      return product
    } catch (error) {
      return "error"

    }
  }

  // TODO: Add Product
  @Mutation(() => String)
  public async addProduct(
    @Arg("body") body: ProductInputT
  ): Promise<string> {
    try {
      const product = new Product({
        sku: body.sku,
        name: body.name,
        slug: slugger(body.name),
        description: body.description,
        quantity: body.quantity,
        price: body.price,
        taxable: body.taxable,
        isActive: body.isActive,
        imageUrl: body.imageUrl,
        imageKey: body.imageKey
      });

      await product.save();
      return "value"

    } catch (error) {
      console.log(error)
      return "error occured"
    }
  }



  // TODO: upload file
  @Mutation(() => String)
  public async uploadFile(
    @Arg("body") body: UploadFileT,
    @Arg("file", () => GraphQLUpload) file: FileUpload
  ): Promise<string> {
    try {
      console.log("start")
      if (!file) {
        return "file not uploaded";
      }

      const { createReadStream, filename } = file;

      // Log body to ensure it's being received
      console.log("Received body:", body);

      const { name, email, password } = body;

      if (!name || !email || !password) {
        console.error("Missing body fields:", { name, email, password });
        return "Missing body fields";
      }

      await new Promise((resolve, reject) => {
        createReadStream()
          .pipe(createWriteStream(path.join(__dirname, "../../../images", filename)))
          .on("finish", resolve)
          .on("error", reject);
      });

      const imageUrl = `http://localhost:9000/images/${filename}`;

      const payload = {
        name,
        email,
        password,
        imageUrl
      };

      console.log("Payload:", payload);

      return payload.imageUrl
    } catch (error) {
      console.error("Error uploading file:", error);
      return "not working";
    }
  }
  // // import { FileUpload } from "graphql-upload";
  // //
  //
  // @Mutation(() => String)
  // public async uploadFile(
  //   @Arg("file", () => GraphQLUpload) file: FileUpload,
  //   @Arg("body") body: UploadFileT
  // ): Promise<string> {
  //   try {
  //     if (!file) {
  //       return "file not uploaded";
  //     }
  //     const { createReadStream, filename } = file;
  //
  //
  //     const { name, email, password } = body;
  //
  //     await new Promise((resolve, reject) => {
  //       createReadStream()
  //         .pipe(createWriteStream(path.join(__dirname, "../../../images", filename)))
  //         .on("finish", resolve)
  //         .on("error", reject);
  //     });
  //
  //     const imageUrl = `http://localhost:4000/images/${filename}`;
  //
  //     const payload = {
  //       name,
  //       email,
  //       password,
  //       imageUrl
  //     };
  //
  //     console.log(payload);
  //
  //     return "working";
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //     return "not working";
  //   }
  // }



}

