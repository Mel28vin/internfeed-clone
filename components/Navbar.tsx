/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import Image from "next/image"
import InternfeedLogo from "../public/Internfeed.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 lg:gap-[4%] mx-[5%] mt-2">
      <div className="lg:flex lg:justify-start lg:items-center lg:basis-[66%]">
        <Link href="/">
          <a className="mr-12">
            <Image src={InternfeedLogo} layout="fixed" />
          </a>
        </Link>
        <Link href="/">
          <a className="hidden lg:block font-bold mr-10">Find Internship</a>
        </Link>
        <Link href="/">
          <a className="hidden lg:block mr-10">For Employers</a>
        </Link>
        <Link href="/">
          <a className="hidden lg:block">Blog</a>
        </Link>
      </div>
      <div className="lg:flex lg:justify-end lg:items-center lg:basis-[30%]">
        <Link href="/">
          <a className="hidden lg:block min-w-fit">Sign Up</a>
        </Link>
        <Link href="/">
          <a className="hidden lg:block px-4 min-w-fit">Sign In</a>
        </Link>
        <Link href="/">
          <button
            type="button"
            className="hover:translate-y-1 py-2 px-4 rounded lg:ml-10 text-white text-center bg-gray-900 font-bold min-w-fit"
          >
            <a>Post Internship</a>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
