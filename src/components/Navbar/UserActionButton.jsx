import { authSession } from "@/service/auth-services"
import Image from "next/image"

const { default: Link } = require("next/link")

const UserActionButton = async () => {
  const user = await authSession()

  const LoggedIn = () => {
    return (
      <div>
        <Image
          src={user.user.image}
          width={40}
          height={40}
          alt="profilepic"
          className="rounded-full object-cover hover:shadow-2xl shadow-md"
        />
      </div>
    )
  }

  const SignInButton = () => {
    return (
      <div className="px-6 py-2 bg-color-primary text-color-light rounded-xl text-md hover:bg-color-gray transition-all hover:text-color-dark">
        Sign In
      </div>
    )
  }

  const actionLabel = user ? <LoggedIn /> : <SignInButton />
  const actionUrl = user ? "/user/dashboard" : "/api/auth/signin"

  return (
    <div>
      <Link href={actionUrl}>{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton
