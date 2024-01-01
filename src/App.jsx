import Router from "./Router/Router"
import { ThemeProvider } from "styled-components"
const App = () => {
  const theme = {
    colors:{
      main_color:"#0062ff",
      supporting_color:"#ebf3fe",
      font_color:"#424242",
      bg_color:"#f8f9fe",
      heading_color:"#2c2c2c",
      para_color:"#504e4d",
      hero_heading_color:"#221b5f",
      white_color:"#ffffff",
      btn_hover_bg_color:"#003b99",
      btn_box_shadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"

    },
    size:{
      sm:"576px",//use greaterthan
      md:"768px", 
      lg:"992px",
      xl:"1220px",
      xxl:"1400px",

    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Router />
    </ThemeProvider>
  )
}

export default App