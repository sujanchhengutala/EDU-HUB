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

.grid{
  gap: 3.2rem;
  .course-div{
    
    padding: 3.2rem;
  }
  .course-div:hover{
    box-shadow: ${({theme})=>theme.colors.btn_box_shadow};
    border-radius: 2rem;
  }
}

}

    
`

export default Course