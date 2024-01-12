import { handlerOption } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export const authSession = async () => {
  const session = getServerSession(handlerOption)
  return session
}
