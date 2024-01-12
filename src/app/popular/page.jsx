"use client"

import CardAnime from "@/components/CardAnime"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"
import { ApiServices } from "../../service/api-services"

const Page = async () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState()

  const fetchData = async () => {
    const response = await ApiServices(
      "top/anime",
      `page=${page}&filter=bypopularity`
    )
    setTopAnime(response)
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
