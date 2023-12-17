import AboutCard from "../Components/Card/AboutCard"
import Heading from "../Components/Heading"
import { aboutData } from "../Data/Data"
import styled from "styled-components";


const About = () => {
  return (
    <Wrapper>
    <section className = "section_about">
        <div className="container">
            <Heading heading = "About Chengutala E-Hub" subHeading = "Guiding your learning journy by researching, designing and development Excellent." />
        </div>
        <div className="container grid grid-three--cols">
            {
                aboutData.map((curElem, index)=>{
                    return (<div className="about_div" key={index}>
                            <AboutCard curElem={curElem} />
                    </div>)
                })
            }

        </div>

    </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.section_about img{
    padding: 2.4rem;
    background-color: ${({theme})=>theme.colors.supporting_color};
    width: 15rem;
    height: auto;
    border-radius: 50%;
    transition: all 0.4s linear;
}
.section_about .about_div{
    text-align: center;
}
.section_about .grid{
    gap: 6.4rem;
}


    
`

export default About