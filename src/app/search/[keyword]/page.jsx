import { ApiServices } from "@/service/api-services"
import CardAnime from "@/components/CardAnime"
import Header from "@/components/CardAnime/Header"

const Page = async ({ params }) => {
  console.log(params)
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)

  const response = await ApiServices("anime", `q=${decodeKeyword}`)

  return (
    <>
      <section id={decodeKeyword.title}>
        <Header title={`Search for ${decodeKeyword}`} />
        <CardAnime dataApi={response} />
      </section>
    </>
  )
}

export default Page
