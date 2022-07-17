import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Motor from "./views/Motor";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="motor" element={<Motor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
