import RedisStore from "connect-redis"
import { createClient } from "redis"

const redisStoreConfig = () => {
  let redisClient = createClient()

  redisClient.connect().catch(console.error)

  let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  })

  return redisStore

}

export default redisStoreConfig
