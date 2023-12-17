// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

import About from "../About"
import HeroSection from "./Hero-section"

// const Home = () => {
//   return (
//     <Wrapper>
//       <main className="main">
//     <div className="section-hero">
//       <div className="container grid grid-two--cols">
//         <div className="section-hero--content">
//           <p className="hero-subheading">
//       Empowering LifeLong Learning
//           </p>
//           <h1 className="hero-heading">
//             Unlock your potential with Sujah E-Hub
//           </h1>
//           <p className="hero-para">
//           Welcome to Sujan EduHUb, your gateway to knowledge and skill development. we are dedicated to providing high-quality, accessible education for learners of all the age and backgrounds.
//           </p>
//           <div className="hero-btn">
//             <NavLink to={"/service"} className="nav-link btn btn-white">
//             Learn With Us
//             </NavLink>
//           </div>

//         </div>
//         <div className="section-hero-image">
          
//             <img src="./images/read.png" alt="" />
          
//         </div>

//       </div>
//     </div>

//     <div className="custom-shape-divider-bottom-1696162272">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//             opacity=".25"
//             className="shape-fill"
//           ></path>
//           <path
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//             opacity=".5"
//             className="shape-fill"
//           ></path>
//           <path
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//             className="shape-fill"
//           ></path>
//         </svg>
//       </div>

//     </main>
//     </Wrapper>
//   )
// }
// const Wrapper = styled.main`
// main{
//   position: relative;
//   background:linear-gradient(to top right, #3d86fa, #4484fb, #679eff, #b3d2ff, #ebf3fe);

//   .custom-shape-divider-bottom-1696162272 {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   overflow: hidden;
//   line-height: 0;
//   transform: rotate(180deg);
// }

// .custom-shape-divider-bottom-1696162272 svg {
//   position: relative;
//   display: block;
//   width: calc(100% + 1.3px);
//   height: 12rem;
// }

// .custom-shape-divider-bottom-1696162272 .shape-fill {
//   fill: #ffffff;
// }
  
//   .section-hero .grid{
//     align-items:center ;
//     gap:6.8rem;

//     .section-hero--content{
//       .hero-subheading{
//         font-size: 1.7rem;
//         letter-spacing:0.2rem;
//         word-spacing:.2rem;
//         font-weight: 600;
//         text-transform: uppercase;
//         color: ${({theme})=>theme.colors.hero_heading_color} !important;
//       }
//       .hero-heading{
//         font-size: 5.8rem;
//         font-family: "jost";
//         color: ${({theme})=>theme.colors.hero_heading_color};
//         font-weight: 700;
//         line-height: 1.3;
//       }
//       .hero-para{
//         margin: 2rem 0 4.2rem 0;
//         color: ${({theme})=>theme.colors.white_color};
//       }

//     }
//   }

//   .section-hero-image img{
//     width: 100%;
//     /* float: right; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: auto;
//     transform: scaleX(-1);
//   }
// }

  
// `

// export default Home



const Home = () => {
  return (
    <>
    <HeroSection />
    <About />
    </>
  )
}

export default Home