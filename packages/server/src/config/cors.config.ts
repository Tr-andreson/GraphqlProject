import cors from "cors"


export const corsConfig = (app: any) => {
  app.use(cors({
    origin: process.env.NODE_ENV === "production" ? ["http://localhost:5173", "http://localhost:3000", "http://localhost:8081"] : ["http://localhost:5173", "https://studio.apollographql.com", "http://localhost:3000", "http://localhost:8081"],
    credentials: true
  }))

}
