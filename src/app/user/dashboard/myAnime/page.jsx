import CardAnime from "@/components/CardAnime"
import Header from "@/components/Dashboard/header"
import { NestedApiServices, reproduceData } from "@/service/api-services"


const Page = async () => {
  let recomendedAnime = await NestedApiServices(
    "recommendations/anime",
    "entry"
  )

  recomendedAnime = reproduceData(recomendedAnime, 5)
  return (
    <div className="px-6 py-6">
      <Header title={"Favorite Anime"} />
      <div>
        <CardAnime dataApi={recomendedAnime} />
      </div>
    </div>
  )
}

export default Page
