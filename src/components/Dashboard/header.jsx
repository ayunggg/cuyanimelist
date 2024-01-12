"use client"

import { CaretLeft } from "@phosphor-icons/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
  const router = useRouter()

  const handleBack = (event) => {
    event.preventDefault
    router.back()
  }

  return (
    <div>
      <div className="flex flex-row justify-between mb-8">
        <button
          className="flex flex-row gap-1 hover:bg-color-gray hover:px-2 hover:py-2 hover:rounded-md transition-all hover:text-sm  hover:text-color-light items-center"
          onClick={handleBack}
        >
          <CaretLeft size={24} />
          <h3 className="font-bold text-md">Back</h3>
        </button>
        <h3 className="font-bold text-md">{title}</h3>
      </div>
    </div>
  )
}

export default Header
