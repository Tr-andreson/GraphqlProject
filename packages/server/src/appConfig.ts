import dotenv from "dotenv"
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import session from "express-session";
import { graphqlUploadExpress } from "graphql-upload-ts";
import path from "path";
import { apolloConfig } from "./config/apollo.config";
import { corsConfig } from "./config/cors.config";
import { databaseConnection } from "./config/database.config";
import redisStoreConfig from "./config/redisStore.config";
import express from "express"


dotenv.config()

const app = express()

const redisStore = redisStoreConfig()

// redis session connection
app.use(
  session({
    store: redisStore,
    name: "redisSession",
    resave: false,
    saveUninitialized: false,
    secret: "keyboard cat",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 2 minutes
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

// apollo config 
apolloConfig(app)

app.get("/check", (_req, res) => {
  res.send("hello world");

})

export default app
