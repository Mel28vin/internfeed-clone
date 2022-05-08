/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex pt-5 justify-around py-4">
      <div className="flex justify-start items-center mt-2 ml-2">
        <Link href="/">
          <a className="text-2xl font-bold text-grey-800 mr-12">Internfeed</a>
        </Link>
        <Link href="/">
          <a className="font-bold mr-10 text-grey-800">Find Internship</a>
        </Link>
        <Link href="/">
          <a className="mr-10 text-grey-800">For Employers</a>
        </Link>
        <Link href="/">
          <a className="text-grey-800">Blog</a>
        </Link>
      </div>
      <div className="flex justify-end items-center mt-2 mr-2">
        <Link href="/">
          <a className="text-grey-800">Sign Up</a>
        </Link>
        <Link href="/">
          <a className="text-grey-800 ml-10">Sign In</a>
        </Link>
        <Link href="/">
          <button
            type="button"
            className="hover:translate-y-1 py-2 px-4 rounded ml-10 text-white text-center bg-gray-900 font-bold"
          >
            <a>Post Internship</a>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
