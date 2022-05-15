import Content from "../components/Content"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="flex flex-col justify-end">
      <Navbar />
      <hr />
      <Content />
    </div>
  )
}

export default Home
