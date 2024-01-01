import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
      <div className="container grid grid-four-cols">
        <div className="footer-i--div">
          <div className="logo-brand">
            <NavLink to={"/home"} className="nav-link footer-subheading">
              Chhengutala E-hub
            </NavLink>
          </div>
          <p>Lets revolutionize the way you study with chhengutala E-hub.</p>

          <div className="social-footer--icon">
            <NavLink
              to={
                "https://www.facebook.com/profile.php?id=100022691107476&viewas=100000686899395"
              }
              className="nav-link footer-icon"
            >
              <FaFacebook />
            </NavLink>
            <NavLink to={"/home"} className="nav-link footer-icon">
              <FaLinkedin />
            </NavLink>
            <NavLink to={"/home"} className="nav-link footer-icon">
              <FaInstagramSquare />
            </NavLink>
            <NavLink to={"/home"} className="nav-link footer-icon">
              <FaLinkedin />
            </NavLink>
          </div>

        </div>
        <div className="footer-2-div">
            <p className="footer-subheading">Links</p>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="footer-3-div">
            <p className="footer-subheading">Links</p>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="footer-4-div">
            <p className="footer-subheading">Links</p>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
      </div>
      </footer>

    </Wrapper>
  );
};

const Wrapper = styled.div`
footer *{
  color: white;
  
}
.footer{
  padding: 15rem 0 0 0;
  background:#040d12;
  .footer-subheading{
    font-size: 2.2rem;
    font-weight: 700;
  }
  .grid{
    text-align: right;
  }
  .footer-i--div{
    text-align: left;
      p{
    padding: 1.2rem 0 2.4rem 0;
  }
  .social-footer--icon{
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    gap: 2.4rem;
   
    
    .footer-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #5a8cc7;
      padding: 1rem;
      border-radius: 50%;
      color: black !important;
    }

  }
  }

}
@media (width<= ${({theme})=>theme.size.lg}){
  .footer{
    .grid-four-cols{
      grid-template-columns:repeat(2, 1fr);
      margin-top: 5.4rem;
      .footer-2-div,.footer-3-div,.footer-3-div{
        display: none;
      }
    }
  }
}

`;

export default Footer;
