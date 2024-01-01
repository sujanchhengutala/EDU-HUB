import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";

const LastSecond = () => {
  return (
    <Wrapper>
      <div className="section-contact--homepage" id="section-contact--homepage">
        <div className="container grid grid-two--cols">
          <div className="contact-content">
            <h2 className="contact-title">
              Lets revolutionize the way you study with chengutala E-hub.
            </h2>
            <p>Join our free bootcams to know us better</p>
            <div className="hero-btn">
              <NavLink to={"/contact"} className="nav-link btn btn-white">
                Start now <IoIosArrowRoundForward />
              </NavLink>
            </div>
          </div>
          <div className="contact-image">
            <img src="./images/comp.png" alt="Computer" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-contact--homepage {
    width: 80%;
    min-height: 30rem;
    margin: 0 auto;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      margin-bottom: 5rem;
      border-radius: 0.2rem;
      padding: 0 3.2rem;
      position: relative;
      top: 22rem;
      z-index: 2;
      background-color: ${({theme})=>theme.colors.white_color};
    .grid {
      align-items: center;
      .contact-content {
        .contact-title {
          font-size: 1.8rem;
          line-height: 1.2;
          text-transform: capitalize;
        }
        p {
          margin: 1.2rem 0 2.4rem 0;
        }
      }
      .contact-image {
        img {
          width: 60%;
          height: auto;
          float: right;
        }
      }
    }
  }
  @media (width<= ${({theme})=>theme.size.lg}){
    .section-contact--homepage{
      width: 50%;
      .grid-two--cols{
        grid-template-columns: 1fr;
        .contact-content{
          .hero-btn{
            .btn{
              width: 100%;
              text-align: center;
            }

          }
        }
        .contact-image{
          display: grid;
          place-items: center;
          img {
          width: 70%;
          height: auto;
          margin: 5.4rem 0 0rem 0;
        }
        }
      }
    }
  }
`;

export default LastSecond;
