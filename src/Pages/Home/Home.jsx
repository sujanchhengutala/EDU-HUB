
import About from "../About"
import Blogs from "../Blog/Blogs"
import Course from "../Course/Course"
// import LastSecond from "../LastSecond"
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"
import HeroSection from "./Hero-section"
const Home = () => {
  return (
    <>
    <HeroSection />
    <About />
    <Course />
    <WhyChooseUs />
    <Blogs />
    {/* <LastSecond /> */}
    </>
  )
}

export default Home