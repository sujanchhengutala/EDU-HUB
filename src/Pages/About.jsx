import AboutCard from "../Components/Card/AboutCard"
import Heading from "../Components/Heading"
import { aboutData } from "../Data/Data"
import styled from "styled-components";
// import LastSecond from "./LastSecond";


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
        {/* <LastSecond /> */}

    </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.section_about{
    .container:first-child{
    padding: 5.4rem 2.4rem 2.4rem 2.4rem;

  }
}
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


@media (width<= ${({theme})=>theme.size.lg}) {
.section_about{
    .grid-three--cols{
        grid-template-columns:1fr;
        .about_div{
            .icon{
            display: flex;
            flex-direction: column;
            justify-content: start;
            }
            text-align: left;

        }
       
    }
}

}
@media (width<= ${({theme})=>theme.size.md}) {

    
}
@media (width<= ${({theme})=>theme.size.sm}) {


}
    
`

export default About