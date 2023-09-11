import type { NextPage } from 'next'
import Header from "../components/Header"
import About from "../components/About"
import SampleBlog from "../components/SampleBlogs"
import ContactUs from "../IEEE-main/contact"
import Footer from "../components/Footer"
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <About />
      <SampleBlog />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
