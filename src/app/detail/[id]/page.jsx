import { ApiServices } from "@/service/api-services"
import VideoPlayer from "@/components/utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
  const response = await ApiServices(`anime/${id}`)
  console.log(response)

  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap px-6 py-10 ">
        <Image
          src={response.data.images.webp.image_url}
          width={300}
          height={300}
          className="w-full object-cover rounded-lg img-custom sm:img-sm"
        />
        <div className="flex flex-col sm:ms-0 md:ms-4 ">
          {/* Header Detail */}
          <h3 className="text-2xl font-bold">
            {response.data.title} - {response.data.year}
          </h3>
          <div className="flex flex-row gap-3 mt-2 overflow-x-auto">
            <h3 className="text-sm text-color-light font-light p-2 bg-color-gray rounded-xl">
              Rating: {response.data.score}
            </h3>
            <h3 className="text-sm text-color-light font-light p-2 bg-color-gray rounded-xl text-ellipsis">
              Duration: {response.data.duration}
            </h3>
            <h3 className="text-sm text-color-light font-light p-2 bg-color-gray rounded-xl">
              Type: {response.data.type}
            </h3>
            {/* End Of Header Detail */}
          </div>
          {/* Syinopsis */}
          <div className="mt-4 overflow-x-hidden">
            <p className="text-justify">{response.data.synopsis}</p>
          </div>
          {/* End Of Syinopsis */}
        </div>
      </div>
      <VideoPlayer videoId={response.data.trailer.youtube_id} />
    </>
  )
}

export default Page
