import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
//base rule
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:"Urbanist", sans-serif;
}
html{
    font-size: 62.5%; /* 1rem=10px */
    
    
}


h1,h2,h3,h4,h5,h6{
    font-family: "Poppins", sans-serif;
}
p,li, label,.nav-link{
    font-family: "Urbanist", sans-serif;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    line-height: 1.5;
    /* color: ${({ theme }) => theme.colors.para_color}; */
}
.nav-link{
    text-decoration: none;
}

li{
    list-style: none;
}

//layout
//reussable css
.container{
    max-width: 130rem; //  1rem = 10px then 142rem= 1420px
    margin: 0 auto;
    padding: 9.4rem 2.4rem;
}
.grid{
    display: grid;
}
.grid-two--cols{
    grid-template-columns: repeat(2, 1fr);
}
.grid-three--cols{
    grid-template-columns: repeat(3, 1fr);
}
.grid-four-cols{
    grid-template-columns: repeat(4, 1fr);

}

.section_common_heading{
    font-size:3.2rem;
    font-weight: 700;
    text-transform: capitalize;
}
.section_common_subheading{
color: ${({theme})=>theme.colors.heading_color};
}
.section_common__title{
    font-size:2rem;
    margin: 2.4rem 0 1.2rem 0;
}
.btn{
    padding: 1.2rem 3.2rem;
    background-color: ${({theme})=>theme.colors.main_color};
    display: inline-block;
    border-radius: 0.6rem;
    color: ${({theme})=>theme.colors.white_color};

    &:hover{
        background-color: ${({theme})=>theme.colors.btn_hover_bg_color};
        box-shadow: ${({theme})=>theme.colors. btn_box_shadow};
        cursor: pointer;
    }
}

::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background:${({theme})=>theme.colors.supporting_color};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme})=>theme.colors.main_color};
  border-radius: 50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({theme})=>theme.colors.heading_color};
}

//?media query start

@media (width<= ${({theme})=>theme.size.xxl}) {
    html{
        font-size: 56.25%;
    }
    
}
@media (width<= ${({theme})=>theme.size.xl}) {
    html{
        font-size: 54%;
    }
    
}
@media (width<= ${({theme})=>theme.size.lg}) {
    html{
        font-size: 50%;
    }
    
    
}
@media (width<= ${({theme})=>theme.size.md}) {
    html{
        font-size: 46.875%;
    }
    
    
}
@media (width<= ${({theme})=>theme.size.sm}) {
    html{
        font-size: 46.875%;
    }
    
    
}


`;
 
export default GlobalStyle;