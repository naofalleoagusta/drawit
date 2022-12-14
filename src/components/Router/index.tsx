import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import routes from "constant/routes";

const Router = () => {
  console.log("test");
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => {
          const Component = route.component;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Suspense fallback={<></>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
