import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageNotFound from "../Pages/PageNotFound"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import GlobalStyle  from "../Styles/GlobalStyle"
import About from "../Pages/About"
import Home from "../Pages/Home/Home"

const Router = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default Router