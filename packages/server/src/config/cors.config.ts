import cors from "cors"


export const corsConfig = (app: any) => {
  app.use(cors({
    origin: process.env.NODE_ENV === "production" ? process.env.FrontEndUrl : ["http://localhost:5173", "https://studio.apollographql.com", "http://localhost:3000"],
    credentials: true
  }))

}
