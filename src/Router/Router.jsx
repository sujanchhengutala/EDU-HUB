import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import PageNotFound from "../Pages/PageNotFound"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import GlobalStyle  from "../Styles/GlobalStyle"

const Router = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default Router