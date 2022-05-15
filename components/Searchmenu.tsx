/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"

const Searchmenu = () => {
  return (
    <div className="flex justify-center items-center flex-wrap mx-6">
      <Link href="/">
        <a className="mx-2 hover:underline">Internfeed</a>
      </Link>
      <span> • </span>
      <Link href="/">
        <a className="mx-2 hover:underline">Find Internship</a>
      </Link>
      <Link href="/">
        <a className="mx-2 hover:underline">For employers</a>
      </Link>
      <span> • </span>
      <Link href="/">
        <a className="mx-2 hover:underline">Blog</a>
      </Link>
      <span> • </span>
      <Link href="/">
        <a className="mx-2 hover:underline">About</a>
      </Link>
      <span> • </span>
      <Link href="/">
        <a className="mx-2 hover:underline">FAQ</a>
      </Link>
      <Link href="/">
        <a className="mx-2 hover:underline">Terms</a>
      </Link>
    </div>
  )
}

export default Searchmenu
