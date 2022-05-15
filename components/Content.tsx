/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import { useMemo } from "react"
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
  return (
    <div className="flex justify-between pt-10 pb-32 mx-[5%] gap-[4%] items-start">
      <div className="flex flex-col basis-[66%]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-grey-800 text-lg">
            Available Internships
          </h3>
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
                <a className="text-[#f1553d] underline">Create Alert</a>
              </button>
            </IconContext.Provider>
          </Link>
        </div>
        <Internships />
      </div>
      <div className="basis-[30%] min-h-50">
        <div className="flex flex-col justify-start gap-5">
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
