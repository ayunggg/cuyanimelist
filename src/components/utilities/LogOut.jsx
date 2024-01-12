"use client"

import { Power } from "@phosphor-icons/react"
import Link from "next/link"

const Logout = () => {
  return (
    <Link
      href={"/api/auth/signout"}
      className="flex flex-row items-center rounded-2xl text-color-gray hover:text-color-danger  transition border px-10 py-2 gap-1"
    >
      <h3>Logout</h3>
      <Power size={24} />
    </Link>
  )
}

export default Logout
