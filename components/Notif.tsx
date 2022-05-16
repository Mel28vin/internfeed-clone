/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"

const Notif = () => {
  return (
    <div className="flex flex-col justify-between mx-6">
      <div className="font-bold text-lg mt-4">
        Get notified of internships matching your search
      </div>
      <input
        type="email"
        placeholder="Enter Email"
        className="min-w-full h-10 my-4 p-3"
      />

      <Link href="/">
        <button
          type="button"
          className="py-2 text-white text-center bg-gray-900 font-bold mb-4"
        >
          <a>Create Alert</a>
        </button>
      </Link>
    </div>
  )
}

export default Notif
