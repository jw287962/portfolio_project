import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import About from "./components/About";

const Router = () => {
  
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About/>}></Route>
       
      </Routes>
    </BrowserRouter>
  );

}
export default Router;