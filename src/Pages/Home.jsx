import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <main className="main">
    <div className="section-hero">
      <div className="container grid grid-two--cols">
        <div className="section-hero--content">
          <p className="hero-subheading">
      Empowering LifeLong Learning
          </p>
          <h1 className="hero-heading">
            Unlock your potential with Sujah E-Hub
          </h1>
          <p className="hero-para">
          Welcome to Sujan EduHUb, your gateway to knowledge and skill development. we are dedicated to providing high-quality, accessible education for learners of all the age and backgrounds.
          </p>
          <div className="hero-btn">
            <NavLink to={"/service"} className="nav-link btn btn-white">
            Learn With Us
            </NavLink>
          </div>

        </div>
        <div className="section-hero-image">
          <figure>
            <img src="./images/read.png" alt="" />
          </figure>
        </div>

      </div>
    </div>
    </main>
    </Wrapper>
  )
}
const Wrapper = styled.main`
main{
  background:linear-gradient(to top right, #3d86fa, #4484fb, #679eff, #b3d2ff, #ebf3fe);
}

  
`

export default Home