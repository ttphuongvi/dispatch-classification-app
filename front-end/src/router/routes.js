import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import TemplatePage from "../Atomic/template/TemplatePage";
import dataRoutes from "./dataRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <TemplatePage /> */}
      <Routes>
        {dataRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
