import styled from "styled-components";
import {whyChooseEven, whyChooseOdd} from "../../Data/Data";
import WhyChoose from "../../Components/Header/WhyChoose";

const WhyChooseUs = () => {
  return (
    <Wrapper>
      <div className="section-why--choose">
        <div className="container">
          <h2 className="section_common_heading">
            Why Choose Chengutala E-Hub
          </h2>
          <p className="section_common_sebheading">
            Choose Chengutala E-Hub for holistic, enriching learning experience
            that empowers you to achieve your goal
          </p>
        </div>
        <div className="container grid grid-three--cols">
          <div className="choose-left--dev text-align--left">
            {
              whyChooseOdd.map((curElem, index)=>{
                  return (
                    <div className="why-choose--div" key={index}>

                    <WhyChoose curElem={curElem} place="end" />
                  </div>

                  )
              })
            }
          </div>
          <div className="choose-center--div">
            <figure>
              <img src="./images/why.jpg" alt="Why choose us" />
            </figure>
          </div>

          <div className="choose-right--dev text-align--right">
            {
              whyChooseEven.map((curElem, index)=>{
                  return (
                    <div className="why-choose--div" key={index} >
                      <WhyChoose curElem={curElem} place="start"/>
                  </div>

                  )
              })
            }



          </div>

        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
.section-why--choose{
  .container:first-child{
    padding: 5.4rem 2.4rem 2.4rem 2.4rem;

  }
  /* background-color: ${({theme})=>theme.colors.supporting_color}; */
  
.grid{
  gap:9.6rem;
  .why-choose--div{
    margin-top: 3.2rem;

  }
  .choose-center--div{
    display: grid;
    place-items: center;
    img{
          width: 95%;
    height: auto;
    
    }

  }

}
  .text-align--left{
    .why-choose--div{
      div{
      display: flex;
      justify-content: start;
      align-items: end;
      flex-direction: column;
      text-align: right;
      }
      
      
    }
  }
}

@media (width<= ${({theme})=>theme.size.lg}) {
.section-why--choose{
  .grid-three--cols{
    grid-template-columns: 1fr;
    gap: 1rem;
    .text-align--left{
      order: 2;

      .why-choose--div{
        div{
          display: flex;
      justify-content: start;
      align-items: start;
      text-align: left;
        }
      }
      
    }
    .choose-center--div{
      order: 1;

      figure{
        display: grid;
        place-items: center;
        img{
          width: 50%;
          height:auto;
        }
      }
    }
    .text-align--right{
      order: 3;
    }

  }
}

}
`;

export default WhyChooseUs;
