import CardAnime from "@/components/CardAnime"
import Header from "@/components/CardAnime/Header"

const Page = async ({ params }) => {
  console.log(params)
  const { keyword } = params
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  )
  const searchAnime = await res.json()
  return (
    <>
      <section id={keyword.title}>
        <Header title={`Search for ${keyword}`} />
        <CardAnime dataApi={searchAnime} />
      </section>
    </>
  )
}

export default Page
