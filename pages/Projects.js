import Event_back from "../components/Event_back"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const style = {
  title: "text-5xl md:text-8xl absolute top-1/3 inset-x-1/3 md:inset-x-1/6 font-semibold text-white text-center"
}
export default function Projects() {
  return <div>
    <Navbar/>
    <div className="bg-black relative">
      <h1 className={style.title}>Projects</h1>
      <Event_back />
    </div>
    <Footer/>
  </div>;
}

