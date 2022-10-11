import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import NotFound from "../pages/NotFound";
import { Context } from "..";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
