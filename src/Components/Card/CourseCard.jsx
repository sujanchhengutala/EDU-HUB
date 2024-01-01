import styled from "styled-components"
const CourseCard = ({ curElem }) => {
  const { image, title, description } = curElem;
  return (
    <Wrapper>
      <div className="icon">
        <img src={image} alt={title} />
      </div>
      <h3 className="section_common__title">{title}</h3>
      <p>{description}</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
.icon{
    img{
        width:9.5rem;
        height: 9.5rem;
        padding: 2.4rem;
        background-color:#a6cbff;
        border-radius:50%;
        filter: sepia(10%);
        
    }
    p{
      justify-content: justify;
    }
}
    
`

export default CourseCard;
