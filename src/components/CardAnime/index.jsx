import Image from "next/image"
import Link from "next/link"
const CardAnime = ({ dataApi }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6 px-6  mb-10">
      {dataApi?.data.map((data) => {
        return (
          <Link
            href={`/${data.mal_id}`}
            className="cursor-pointer shadow-lg rounded-md card-anime bg-color-light"
            key={data.mal_id}
          >
            <Image
              src={data.images.webp.image_url}
              alt="thumbnail"
              width={200}
              height={200}
              priority={true}
              className="w-full object-cover rounded-t-lg"
            />
            <h1 className="p-4 font-bold md:text-sm text-ellipsis overflow-hidden leading-3">
              {data.title}
            </h1>
          </Link>
        )
      })}
    </div>
  )
}

export default CardAnime
