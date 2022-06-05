/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { BsArrowUpRight } from "react-icons/bs"
import OracleLogo from "../public/OracleLogo.png"
import AlteryxLogo from "../public/AlteryxLogo.png"
import C3Logo from "../public/C3Logo.png"
import SplunkLogo from "../public/SplunkLogo.png"
import RVLogo from "../public/RVLogo.png"
import IndiegogoLogo from "../public/IndiegogoLogo.png"
import EpiserverLogo from "../public/EpiserverLogo.png"

interface JobInfo {
  image: StaticImageData
  company: string
  description: string
  location: string
  remote: boolean
}

const Internships = () => {
  const jobs: JobInfo[] = [
    {
      image: OracleLogo,
      company: "Oracle",
      description:
        "Software Engineer Intern (Sophomore) - Oracle Cloud Infrastructure (OCI)",
      location: "",
      remote: false,
    },
    {
      image: OracleLogo,
      company: "Oracle",
      description:
        "Software Engineer Intern (Junior) - Oracle Cloud Infrastructure (OCI)",
      location: "",
      remote: false,
    },
    {
      image: AlteryxLogo,
      company: "Alteryx",
      description: "Software Engineer",
      location: "Boston, MA",
      remote: false,
    },
    {
      image: SplunkLogo,
      company: "Splunk",
      description: "Software Engineer",
      location: "Seattle, WA, USA",
      remote: false,
    },
    {
      image: C3Logo,
      company: "C3.ai",
      description: "Software Engineer - Intern (Summer 2021)",
      location: "Redwood City, CA, USA",
      remote: false,
    },
    {
      image: RVLogo,
      company: "RV Travel Nation",
      description: "Marketing Intern",
      location: "Tulsa, OK",
      remote: false,
    },
    {
      image: IndiegogoLogo,
      company: "Indiegogo",
      description: "Sales Development Representative",
      location: "San Francisco, CA, USA",
      remote: true,
    },
    {
      image: EpiserverLogo,
      company: "Episerver",
      description: "Intern - Data Analyist, Paid",
      location: "",
      remote: true,
    },
  ]

  return (
    <div className="flex flex-col mt-5">
      <hr />
      {jobs.map((job) => (
        <>
          <Link href="/">
            <a className="block p-5 hover:bg-gray-100">
              <div className="flex">
                <div className="w-16 basis-[8%]">
                  <Image
                    src={job.image}
                    alt="Logo"
                    width="62px"
                    height="62px"
                    layout="fixed"
                  />
                </div>
                <div className="flex flex-col mx-5 gap-1 basis-[86%]">
                  <div className="font-bold">{job.company}</div>
                  <div>{job.description}</div>
                  <div className="flex text-sm">
                    {job.location !== "" ? (
                      <div className="font-light text-gray-600 mr-2">
                        {job.location}
                      </div>
                    ) : null}
                    {job.remote ? (
                      <div className="px-1 min-w-fit bg-[#BCEBE966] rounded-lg font-light">
                        Remote Friendly
                      </div>
                    ) : null}
                  </div>
                </div>
                <Link href="/">
                  <a>
                    <button
                      type="button"
                      className="rounded-full p-1 w-6 h-6 items-center hover:bg-slate-300"
                    >
                      <BsArrowUpRight />
                    </button>
                  </a>
                </Link>
              </div>
            </a>
          </Link>
          <hr />
        </>
      ))}
    </div>
  )
}

export default Internships
