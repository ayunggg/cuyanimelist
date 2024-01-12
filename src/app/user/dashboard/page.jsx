import Logout from "@/components/utilities/LogOut"
import { authSession } from "@/service/auth-services"
import { Power } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
  const user = await authSession()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-2xl">Welcome to your dashboard!</h3>
        <Image
          src={user.user.image}
          width={200}
          height={200}
          alt={user.user.name}
          className="rounded-full object-cover shadow-xl"
        />
        <p className="text-sm text-color-dark">Hi, {user.user.name}</p>
        <div className="flex md:flex-row flex-col md:gap-3 gap-2 items-center">
          <Link
            href={"/user/dashboard/myAnime"}
            className="px-10 py-2 bg-color-primary rounded-xl text-color-light hover:bg-color-gray  transition"
          >
            My Anime
          </Link>
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default Page
