import Router from "./Router/Router"
import { ThemeProvider } from "styled-components"
const App = () => {
  const theme = {
    colors:{
      main_color:"#0062ff",
      supporting_color:"#ebf3fe",
      font_color:"#424242",
      bg_color:"ffffff",
      heading_color:"#000a19",
      para_color:"#504e4d",
      h_color:"#0a043c",
      white_color:"#ffffff",
      btn_hover_bg_color:"#003b99",
      btn_box_shadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"

    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Router />
    </ThemeProvider>
  )
}

export default App