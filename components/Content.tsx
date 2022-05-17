/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import { useMemo, useState } from "react"
import { IconContext } from "react-icons"
import {
  AiFillBell,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineSlack,
} from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import Filters from "./Filters"
import Internships from "./Internships"
import Notif from "./Notif"
import Searchmenu from "./Searchmenu"

const Content = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFiltersPopup = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="pt-10 pb-32 flex lg:justify-between lg:items-start mx-[5%]  lg:gap-[4%]">
      <div className="block min-w-full lg:flex lg:flex-col lg:basis-[66%] lg:min-w-min">
        <div className="flex justify-between items-center">
          <div className="h3 font-bold text-grey-800 text-lg">
            Available Internships
          </div>
          <Link href="/">
            <IconContext.Provider
              value={useMemo(
                () => ({
                  className: "text-[#f1553d]",
                }),
                []
              )}
            >
              <button type="button" className="flex items-center gap-1">
                <AiFillBell color="" />
                <a className="text-[#f1553d] underline hover:no-underline">
                  Create Alert
                </a>
              </button>
            </IconContext.Provider>
          </Link>
        </div>
        <div
          className="font-bold border text-center py-1 mt-2 cursor-pointer lg:hidden"
          onClick={toggleFiltersPopup}
        >
          Filters
        </div>
        <Internships />
      </div>
      <div className="lg:basis-[30%] lg:min-h-50">
        <div className="hidden lg:flex lg:flex-col lg:justify-start lg:gap-5">
          <div className="bg-gray-100">
            <Filters />
          </div>
          <div className="bg-gray-100">
            <Notif />
          </div>
          <Searchmenu />
          <div className="flex items-center justify-center gap-3">
            <Link href="/">
              <button type="button">
                <AiOutlineInstagram size={25} />
              </button>
            </Link>
            <Link href="/">
              <button type="button">
                <AiOutlineTwitter size={25} />
              </button>
            </Link>
            <Link href="/">
              <button type="button">
                <FaFacebookF size={25} />
              </button>
            </Link>
            <Link href="/">
              <button type="button">
                <AiOutlineSlack size={25} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
