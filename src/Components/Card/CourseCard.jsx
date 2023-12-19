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
        width:10rem;
        height: 10rem;
        padding: 2.4rem;
        background-color: ${({theme})=> theme.colors.supporting_color};
        border-radius:50%;
        
    }
}
    
`

export default CourseCard;
