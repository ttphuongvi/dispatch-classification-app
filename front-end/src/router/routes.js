import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
