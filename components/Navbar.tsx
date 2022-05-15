/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 gap-[4%] mx-[5%] mt-2">
      <div className="flex justify-start items-center basis-[66%]">
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
      <div className="flex justify-between items-center basis-[30%]">
        <Link href="/">
          <a className="text-grey-800 min-w-fit">Sign Up</a>
        </Link>
        <Link href="/">
          <a className="text-grey-800 px-4 min-w-fit">Sign In</a>
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
