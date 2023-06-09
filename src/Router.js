import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <BrowserRouter basename="/portfolio_project">
      <Nav></Nav>
      <Routes>
        <Route path="/*" element={<App />}></Route>
        <Route path="/Home" element={<App />}></Route>
        <Route path="/portfolio_project/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};
export default Router;
