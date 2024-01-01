import styled from "styled-components"
// import { TiHtml5 } from "react-icons/ti";
import { courseData } from "../../Data/Data";
import CourseCard from "../../Components/Card/CourseCard";

const Course = () => {
  return (
    <Wrapper>
        <div className="section-course">
            <div className="container">
                <h2 className="section_common_heading">Explore our courses</h2>
                <p className="section_common_sebheading">Discover a varity of courses accross different category</p>
            </div>
        

        <div className="container grid grid-four-cols">
          
            {courseData.map((curElem, index)=>{
              return <div className="course-div" key={index}>
              <CourseCard curElem={curElem} />
              </div>
              
            })}
          </div>
          </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.section-course{
  background-color: ${({theme})=>theme.colors.bg_color};
  .container:first-child{
    padding: 5.4rem 2.4rem 2.4rem 2.4rem;
  }

.grid{
  gap: 3.2rem;
  .course-div{
    box-shadow: ${({theme})=>theme.colors.btn_box_shadow};
    background-color: ${({theme})=>theme.colors.white_color};
    /* border-radius:  10rem 2rem 10rem 2rem; */
    padding: 4.2rem 4.5rem;
    backdrop-filter: blur(10px);
  }
  .course-div:nth-child(odd){
    border-radius:  10rem 2rem 10rem 2rem;
  }
  .course-div:nth-child(even){
    border-radius: 2rem 10rem 2rem 8rem ;
  }
  .course-div:hover{
    box-shadow: ${({theme})=>theme.colors.btn_box_shadow};
    /* border-radius: 2rem 10rem 2rem 8rem ; */
  }
}

}


@media (width<= ${({theme})=>theme.size.lg}) {
.section-course{
    .grid-four-cols{
        grid-template-columns:1fr;
    }
}
}

    
`

export default Course