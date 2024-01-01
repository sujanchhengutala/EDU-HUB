import styled from "styled-components";

const WhyChoose = ({ curElem }) => {
  return (
    <Wrapper>
        <div>
      <p className="common-text--highlight">{curElem.number}</p>
      <h3 className="section_common__title">{curElem.title}</h3>
      <p>{curElem.description}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
.common-text--highlight{
    width: 5rem;
    aspect-ratio: 1;
    background: ${({theme})=>theme.colors.supporting_color};
    display: flex;
    justify-content: center;
    align-items: center;
    font: 2.4rem ;
    font-weight: 700;
    border-radius: 50%;
}
`;

export default WhyChoose;
