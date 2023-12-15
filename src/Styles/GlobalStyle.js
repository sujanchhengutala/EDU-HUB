import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:wght@200;300;400;600&family=Kalam:wght@300&family=Poppins:wght@100;300;400&family=Spectral:wght@200;300;400;600&family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
p,li,.nav-link{
    font-family: "Urbanist", sans-serif;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.para_color};
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
    padding: 9.6rem 2.4rem;
}
.grid{
    display: grid;
}
.grid-two--cols{
    grid-template-columns: repeat(2, 1fr);
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


`;
 
export default GlobalStyle;