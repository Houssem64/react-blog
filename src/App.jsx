import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Article";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Analytics />
      <div className="bg-gradient-to-r from-[#020213] to-[#091c38] -mt-2">
        <Routes>
          <Route index element={<Home />} />
          <Route path="posts/:slug" element={<Articles />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
