import styled from "styled-components"
const AboutCard = ({curElem}) => {
    const {image, title, description, alt} = curElem
  return (
    <Wrapper>
    <div className="icon">
    <img src={image} alt={alt} />
    </div>
    <h3 className="section_common__title">{title}</h3>
    <p>{description}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
         .icon:hover>img{
            transform: rotate(360deg);
            background:linear-gradient(to right, #0575e6, #2c46a3);
        }
`

export default AboutCard