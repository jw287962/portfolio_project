import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* <Route path="/about" element={< />}></Route> */}
       
      </Routes>
    </BrowserRouter>
  );

}
export default Router;