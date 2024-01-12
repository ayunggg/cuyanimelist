import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
  return (
    <header className="bg-color-light shadow-md">
      <div className="flex md:flex-row flex-col justify-between md:items-center px-6 py-4">
        <Link
          href={"/"}
          className="text-2xl font-bold text-color-primary hover:text-color-gray transition-all"
        >
          CUYANIMELIST.
        </Link>
        <div className="flex flex-col md:flex-row md:gap-10  md:items-center sm:items-start gap-3">
          <InputSearch />
          <UserActionButton />
        </div>
      </div>
    </header>
  )
}

export default Navbar
