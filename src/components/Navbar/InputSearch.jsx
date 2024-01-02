"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

const { MagnifyingGlass } = require("@phosphor-icons/react")

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = async (event) => {
    if (event.key == "Enter" || event.type === "click") {
      event.preventDefault()
      const keyword = searchRef.current.value
      keyword.length === 0
        ? alert("Field Tidak Boleh Kosong")
        : router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="relative flex md:flex-row flex-col text-gray-400">
      <input
        placeholder="Cari Anime..."
        className="md:w-56 w-full md:mt-0 mt-2 md:rounded-lg rounded-md p-2"
        ref={searchRef}
        onKeyUp={handleSearch}
      />
      <button
        className="absolute md:end-2 md:top-2 end-2 top-3.5"
        onClick={handleSearch}
      >
        <MagnifyingGlass
          size={24}
          className="text-gray hover:text-color-gray transition-all"
        />
      </button>
    </div>
  )
}

export default InputSearch
