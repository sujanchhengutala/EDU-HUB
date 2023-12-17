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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;

      .navbar{
        ul{
            display: flex;
            gap: 3.2rem;
            text-transform: capitalize;
            
            li{
                .nav-link{
                    text-transform: uppercase;
                    color: ${({theme})=>theme.colors.heading_color};
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
`;

export default Header;
