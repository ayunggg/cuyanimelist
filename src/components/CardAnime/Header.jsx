import Link from "next/link"
const Header = ({ title, link }) => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-10">
        <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
        {link ? (
          <Link
            href={link}
            className="hover:text-color-darkBlue underline transition-shadow cursor-pointer text-color-dark text-sm"
          >
            See all
          </Link>
        ) : null}
      </div>
    </>
  )
}

export default Header
