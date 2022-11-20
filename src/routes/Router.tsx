import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";
import Home from "@/views/Home";
import Header from "@/components/Header";
import Upload from "@/views/Upload";
import Photos from "@/views/Photos";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${routes.upload}`} element={<Upload />} />
        <Route path={`/${routes.photos}`} element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
