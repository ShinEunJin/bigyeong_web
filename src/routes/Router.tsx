import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/views/Home";
import Display from "@/views/Display";
import Header from "@/components/Header";
import routes from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${routes.display}`} element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
