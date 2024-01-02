"use client"

import CardAnime from "@/components/CardAnime"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"

const Page = async () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState()

  const fetchData = async () => {
    const responseTopAnime = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}&filter=bypopularity`
    )
    const data = await responseTopAnime.json()
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])
  return (
    <>
      <HeaderMenu
        title={` Popular Anime`}
        page={page}
        lastPage={topAnime?.pagination?.last_visible_page}
      />
      <CardAnime dataApi={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  )
}

export default Page
