import http from "node:http"
import "reflect-metadata"
import app from "./appConfig"

const main = () => {

  const server = http.createServer(app)
  server.listen(process.env.PORT, () => {
    console.log(`server listing to port ${process.env.PORT}`)
  })
}

main()
