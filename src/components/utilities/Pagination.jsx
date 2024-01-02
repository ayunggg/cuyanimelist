import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react"

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const handleNextPage = () => {
    setPage((prevSate) => prevSate + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevSate) => prevSate - 1)
    scrollTop()
  }

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 py-8 ">
        <button
          className="text-md font-bold hover:text-color-darkBlue transition-all disabled:hover:text-color-danger disabled:opacity-30"
          onClick={handlePrevPage}
          disabled={page === 1 ? true : false}
        >
          <ArrowCircleLeft size={32} />
        </button>

        <div>
          {page} of {lastPage}
        </div>

        <button
          className="text-md font-bold hover:text-color-darkBlue transition-all disabled:hover:text-color-danger disabled:opacity-50"
          onClick={handleNextPage}
          disabled={page === lastPage ? true : false}
        >
          <ArrowCircleRight size={32} />
        </button>
      </div>
    </>
  )
}

export default Pagination
