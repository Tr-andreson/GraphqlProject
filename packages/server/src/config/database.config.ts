import mongoose from "mongoose"


export const databaseConnection = async () => {
  await mongoose.connect(process.env.DATABASE_URL as string).then(() => {
    console.log("Connection Succesfull")
  }).catch((error) => {
    console.log("error" + error)

  })
}

