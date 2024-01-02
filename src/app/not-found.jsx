"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
  return (
    <div className="flex flex-col gap-4 max-w-xl min-h-screen justify-center items-center mx-auto">
      <div className="flex flex-row gap-4 justify-center items-center">
        <FileSearch className="w-12 h-12 text-color-primary" />
        <h6 className="md:text-5xl text-2xl text-color-primary">NOT FOUND.</h6>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <Link
          href={"/"}
          className="bg-color-darkBlue px-20 py-2 rounded-xl font-bold text-color-light shadow-md hover:shadow-xl hover:text-color-dark transition-all"
        >
          BACK
        </Link>
      </div>
    </div>
  )
}

export default Page
