import bodyParser from "body-parser"
import compression from "compression"
import cookieParser from "cookie-parser"
import express from "express"
import http from "node:http"
import "reflect-metadata"
import { apolloConfig } from "./config/apollo.config"
import { corsConfig } from "./config/cors.config"
import { databaseConnection } from "./config/database.config"
import session from "express-session"
import redisSessionConfig from "./config/redisSession.config"
import dotenv from "dotenv"
import { graphqlUploadExpress } from "graphql-upload-ts"
import path from "node:path"
dotenv.config()

const main = () => {
  const app = express()

  const redisStore = redisSessionConfig()

  // redis session connection
  app.use(
    session({
      store: redisStore,
      name: "redisSession",
      resave: false,
      saveUninitialized: false,
      secret: "keyboard cat",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax",
        secure: false
      }
    }),
  )

  // graph ql updload
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  app.use("/images", express.static(path.join(__dirname, "../images")));

  app.use(express.json())
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser())

  // cors config
  corsConfig(app)

  // database connection
  databaseConnection()

  apolloConfig(app)

  const server = http.createServer(app)

  server.listen(process.env.PORT, () => {
    console.log(`server listing to port ${process.env.PORT}`)
  })
}

main()
