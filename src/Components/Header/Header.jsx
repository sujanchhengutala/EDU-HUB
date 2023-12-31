import { NavLink } from "react-router-dom";
import { navLinks } from "../../Data/Data";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <header className="section-navbar">
        <div className="container">
          {/* //LOGO */}

          <div className="navbar-brand">
            <NavLink to={"/"}>
              <img
                src="./images/logo.png"
                alt="my chhengutala edu-hub"
                width={"80%"}
                height={"auto"}
              />
            </NavLink>
          </div>

          {/* NAV START HERE */}

          <nav className="navbar">
            <ul>
              {navLinks.map(({ name, path }, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink to={path} className="nav-link">
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .section-navbar {
    width: 100%;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.8rem 2.4rem;

      .navbar{
      
        ul{
            display: flex;
            gap: 3.2rem;
            text-transform: capitalize;
            
            li{
                .nav-link{
                    text-transform: uppercase;
                    color: ${({theme})=>theme.colors.hero_heading_color};
                    font-size: 1.6rem;
                    font-weight: 530;
                    display: inline-block;
                    position: relative;

                    &::after{
                        content:"";
                        position: absolute;
                        bottom: -0.2rem;
                        left: 0;
                        width:0%;
                        border-bottom: 0.3rem solid ${({theme})=>theme.colors.main_color};
                        transition: all 0.3s linear;

                    }
                }
                .nav-link:hover:after{
                  width: 100%;
                }
            }
        }
      }
    }
  }

  @media (width<= ${({theme})=>theme.size.md}) {
.section-navbar{
  .container{
    display: flex;
  flex-direction: column;
  .navbar-brand{
    text-align: center;
    /* margin-bottom: 1.4rem; */
  }
  .navbar{
    margin: 3rem;
  }
  }

}
    
    
}
`;

export default Header;
