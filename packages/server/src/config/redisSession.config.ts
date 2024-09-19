import RedisStore from "connect-redis"
import { createClient } from "redis"

const redisSessionConfig = () => {
  let redisClient = createClient()


  // if (process.env.NODE_ENV === "test") {
  //   await redisClient.flushAll()
  // }

  redisClient.connect().catch(console.error)

  let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  })

  return redisStore

}

export default redisSessionConfig
