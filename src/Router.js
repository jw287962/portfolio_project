import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About/>}></Route>
       
      </Routes>
    </BrowserRouter>
  );

}
export default Router;