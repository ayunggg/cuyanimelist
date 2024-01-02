import CardAnime from "@/components/CardAnime"
import Header from "@/components/CardAnime/Header"

const Home = async () => {
  const responseTopAnime = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10&filter=bypopularity`
  )
  const resultTopAnime = await responseTopAnime.json()

  return (
    <>
      <section>
        <Header title={"Popular Anime"} link={"/popular"} />
        <CardAnime dataApi={resultTopAnime} />
      </section>
    </>
  )
}

export default Home
