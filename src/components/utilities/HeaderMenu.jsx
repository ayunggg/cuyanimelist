const HeaderMenu = ({ title, page, lastPage }) => {
  return (
    <>
      <div className="text-start text-md text-color-dark py-6 px-6 flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <h3>Home</h3>
          <h3>/</h3>
          <h3>{title}</h3>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center">
          <h3>
            {page} of {lastPage} Page
          </h3>
        </div>
      </div>
    </>
  )
}

export default HeaderMenu
