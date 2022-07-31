import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Photo from "./views/Photo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="photo" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
