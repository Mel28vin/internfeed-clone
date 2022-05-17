import Head from "next/head"
import Content from "../components/Content"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Head>
        <title>Internfeed-Find Internships</title>
      </Head>
      <div className="flex flex-col justify-end">
        <Navbar />
        <hr />
        <Content />
      </div>
    </>
  )
}

export default Home
