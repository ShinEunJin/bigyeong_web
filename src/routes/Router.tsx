import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";
import Home from "@/views/Home";
import Display from "@/views/Display";
import Header from "@/components/Header";
import Upload from "@/views/Upload";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${routes.display}`} element={<Display />} />
        <Route path={`/${routes.upload}`} element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
