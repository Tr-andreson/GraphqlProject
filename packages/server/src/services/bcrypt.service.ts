
import bcrypt from "bcrypt"

export const HashPassword = async (password: string) => {
  return bcrypt.hashSync(password, 10)
}
