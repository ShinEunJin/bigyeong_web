import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/views/Home";
import Bike from "@/views/Display/Bike";
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bike" element={<Bike />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
