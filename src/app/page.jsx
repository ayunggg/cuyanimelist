import CardAnime from "@/components/CardAnime"
import Header from "@/components/CardAnime/Header"
import {
  ApiServices,
  NestedApiServices,
  reproduceData,
} from "../service/api-services"

const Home = async () => {
  const response = await ApiServices(
    "top/anime",
    "limit=10&filter=bypopularity"
  )

  let recomendedAnime = await NestedApiServices(
    "recommendations/anime",
    "entry"
  )

  recomendedAnime = reproduceData(recomendedAnime, 5)

  return (
    <>
      <section>
        <div className="px-6 py-4">
          <Header title={"Popular Anime"} link={"/popular"} />
        </div>
        <div className="px-6 ">
          <CardAnime dataApi={response} />
        </div>
      </section>
      <section>
        <div className="px-6">
          <Header title={"Rocemmended Anime"} />
        </div>
        <div className="px-6 py-6">
          <CardAnime dataApi={recomendedAnime} />
        </div>
      </section>
    </>
  )
}

export default Home
